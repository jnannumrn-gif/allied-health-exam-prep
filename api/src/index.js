// Allied Health Prep API — Cloudflare Worker + D1
// Allied Health certification exam prep backend

const JWT_SECRET = "allied-health-prep-secret-key-change-in-production";
const ADMIN_PASSWORD = "FIT-Admin-2025!";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
  "Access-Control-Allow-Headers":
    "Content-Type,Authorization,X-Auth-Token,X-Admin-Password",
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", ...CORS_HEADERS },
  });
}

function err(msg, status = 400) {
  return json({ error: msg }, status);
}

function uuid() {
  return crypto.randomUUID();
}

// ── JWT helpers ──────────────────────────────────────────────────────────────

async function getKey() {
  const enc = new TextEncoder();
  return crypto.subtle.importKey(
    "raw",
    enc.encode(JWT_SECRET),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

function b64url(buf) {
  return btoa(String.fromCharCode(...new Uint8Array(buf)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function b64urlDecode(str) {
  str = str.replace(/-/g, "+").replace(/_/g, "/");
  while (str.length % 4) str += "=";
  const bin = atob(str);
  return Uint8Array.from(bin, (c) => c.charCodeAt(0));
}

async function createToken(userId) {
  const key = await getKey();
  const header = b64url(
    new TextEncoder().encode(JSON.stringify({ alg: "HS256", typ: "JWT" }))
  );
  const payload = b64url(
    new TextEncoder().encode(
      JSON.stringify({
        sub: userId,
        exp: Math.floor(Date.now() / 1e3) + 30 * 24 * 3600,
      })
    )
  );
  const sig = b64url(
    await crypto.subtle.sign(
      "HMAC",
      key,
      new TextEncoder().encode(`${header}.${payload}`)
    )
  );
  return `${header}.${payload}.${sig}`;
}

async function decodeToken(token) {
  const parts = token.split(".");
  if (parts.length !== 3) throw new Error("Invalid token");
  const key = await getKey();
  const valid = await crypto.subtle.verify(
    "HMAC",
    key,
    b64urlDecode(parts[2]),
    new TextEncoder().encode(`${parts[0]}.${parts[1]}`)
  );
  if (!valid) throw new Error("Invalid signature");
  const payload = JSON.parse(
    new TextDecoder().decode(b64urlDecode(parts[1]))
  );
  if (payload.exp && payload.exp < Math.floor(Date.now() / 1e3))
    throw new Error("Token expired");
  return payload.sub;
}

// ── Password helpers ─────────────────────────────────────────────────────────

async function hashPassword(password) {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    "PBKDF2",
    false,
    ["deriveBits"]
  );
  const hash = await crypto.subtle.deriveBits(
    { name: "PBKDF2", salt, iterations: 1e5, hash: "SHA-256" },
    key,
    256
  );
  const saltHex = [...salt]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  const hashHex = [...new Uint8Array(hash)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return `pbkdf2:${saltHex}:${hashHex}`;
}

async function verifyPassword(password, stored) {
  const [, saltHex, hashHex] = stored.split(":");
  const salt = Uint8Array.from(
    saltHex.match(/.{2}/g).map((b) => parseInt(b, 16))
  );
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    "PBKDF2",
    false,
    ["deriveBits"]
  );
  const hash = await crypto.subtle.deriveBits(
    { name: "PBKDF2", salt, iterations: 1e5, hash: "SHA-256" },
    key,
    256
  );
  const computed = [...new Uint8Array(hash)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return computed === hashHex;
}

// ── Auth middleware ───────────────────────────────────────────────────────────

async function getUser(request, db) {
  const authToken = request.headers.get("X-Auth-Token");
  const authHeader = request.headers.get("Authorization");
  let token = null;
  if (authToken) {
    token = authToken;
  } else if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.slice(7);
  }
  if (!token) return null;
  try {
    const userId = await decodeToken(token);
    const row = await db
      .prepare("SELECT * FROM users WHERE id = ?")
      .bind(userId)
      .first();
    return row;
  } catch {
    return null;
  }
}

function userResponse(u) {
  return {
    id: u.id,
    email: u.email,
    name: u.name,
    language: u.language,
    exam_date: u.exam_date,
    certification: u.certification || 'medical_assisting',
  };
}

function formatQuestion(row) {
  return {
    id: row.id,
    domain: row.domain,
    difficulty: row.difficulty,
    question_en: row.question_en,
    question_es: row.question_es,
    option_a_en: row.option_a_en,
    option_a_es: row.option_a_es,
    option_b_en: row.option_b_en,
    option_b_es: row.option_b_es,
    option_c_en: row.option_c_en,
    option_c_es: row.option_c_es,
    option_d_en: row.option_d_en,
    option_d_es: row.option_d_es,
  };
}

// ── Main handler ─────────────────────────────────────────────────────────────

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: CORS_HEADERS });
    }

    const url = new URL(request.url);
    const path = url.pathname;
    const method = request.method;
    const db = env.DB;

    try {
      // Health check
      if (path === "/healthz" || path === "/api/healthz") {
        return json({ status: "ok" });
      }

      // ── Auth ─────────────────────────────────────────────────────────────

      if (path === "/api/auth/register" && method === "POST") {
        const body = await request.json();
        const { email, password, name, language = "es", exam_date = null, certification = "medical_assisting" } = body;
        if (!email || !password || !name) return err("Missing fields");
        const existing = await db
          .prepare("SELECT id FROM users WHERE email = ?")
          .bind(email)
          .first();
        if (existing) return err("Email already registered");
        const userId = uuid();
        const pwHash = await hashPassword(password);
        await db
          .prepare(
            "INSERT INTO users (id, email, password_hash, name, language, exam_date, certification) VALUES (?,?,?,?,?,?,?)"
          )
          .bind(userId, email, pwHash, name, language, exam_date, certification)
          .run();
        const user = await db
          .prepare("SELECT * FROM users WHERE id = ?")
          .bind(userId)
          .first();
        const token = await createToken(userId);
        return json({ token, user: userResponse(user) });
      }

      if (path === "/api/auth/login" && method === "POST") {
        const body = await request.json();
        const { email, password } = body;
        if (!email || !password) return err("Missing fields");
        const user = await db
          .prepare("SELECT * FROM users WHERE email = ?")
          .bind(email)
          .first();
        if (!user) return err("Invalid email or password", 401);
        if (user.disabled === 1)
          return err("Account is disabled. Contact administrator.", 403);
        const valid = await verifyPassword(password, user.password_hash);
        if (!valid) return err("Invalid email or password", 401);
        const token = await createToken(user.id);
        return json({ token, user: userResponse(user) });
      }

      // ── User ─────────────────────────────────────────────────────────────

      if (path === "/api/user/me" && method === "GET") {
        const user = await getUser(request, db);
        if (!user) return err("Missing token", 401);
        return json(userResponse(user));
      }

      if (path === "/api/user/me" && method === "PUT") {
        const user = await getUser(request, db);
        if (!user) return err("Missing token", 401);
        const body = await request.json();
        const updates = [];
        const params = [];
        if (body.name) {
          updates.push("name = ?");
          params.push(body.name);
        }
        if (body.language) {
          updates.push("language = ?");
          params.push(body.language);
        }
        if (body.exam_date !== undefined) {
          updates.push("exam_date = ?");
          params.push(body.exam_date);
        }
        if (body.certification) {
          updates.push("certification = ?");
          params.push(body.certification);
        }
        if (body.password && body.current_password) {
          const valid = await verifyPassword(
            body.current_password,
            user.password_hash
          );
          if (!valid) return err("Current password is incorrect");
          updates.push("password_hash = ?");
          params.push(await hashPassword(body.password));
        }
        if (updates.length > 0) {
          params.push(user.id);
          await db
            .prepare(`UPDATE users SET ${updates.join(", ")} WHERE id = ?`)
            .bind(...params)
            .run();
        }
        const updated = await db
          .prepare("SELECT * FROM users WHERE id = ?")
          .bind(user.id)
          .first();
        return json(userResponse(updated));
      }

      // ── Questions ────────────────────────────────────────────────────────

      if (path === "/api/questions" && method === "GET") {
        const user = await getUser(request, db);
        if (!user) return err("Missing token", 401);
        const domain = url.searchParams.get("domain");
        const limit = parseInt(url.searchParams.get("limit") || "25");
        const excludeIds = url.searchParams.get("exclude_ids");
        let query = "SELECT * FROM questions WHERE 1=1";
        const params = [];
        if (domain) {
          query += " AND domain = ?";
          params.push(domain);
        }
        if (excludeIds) {
          const ids = excludeIds
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean);
          if (ids.length > 0) {
            query += ` AND id NOT IN (${ids.map(() => "?").join(",")})`;
            params.push(...ids);
          }
        }
        query += " LIMIT ?";
        params.push(limit);
        const stmt = db.prepare(query);
        const { results } = await (params.length > 0
          ? stmt.bind(...params)
          : stmt
        ).all();
        return json(results.map((r) => formatQuestion(r)));
      }

      if (path === "/api/questions/random" && method === "GET") {
        const user = await getUser(request, db);
        if (!user) return err("Missing token", 401);
        const domain = url.searchParams.get("domain");
        const limit = parseInt(url.searchParams.get("limit") || "25");
        let query = "SELECT * FROM questions";
        const params = [];
        if (domain) {
          query += " WHERE domain = ?";
          params.push(domain);
        }
        query += " ORDER BY RANDOM() LIMIT ?";
        params.push(limit);
        const stmt = db.prepare(query);
        const { results } = await stmt.bind(...params).all();
        return json(results.map((r) => formatQuestion(r)));
      }

      // ── Attempts ─────────────────────────────────────────────────────────

      if (path === "/api/attempts" && method === "POST") {
        const user = await getUser(request, db);
        if (!user) return err("Missing token", 401);
        const body = await request.json();
        const { question_id, selected_answer, session_id = null } = body;
        const lang = user.language || "es";
        const question = await db
          .prepare("SELECT * FROM questions WHERE id = ?")
          .bind(question_id)
          .first();
        if (!question) return err("Question not found", 404);
        const isCorrect =
          selected_answer.toUpperCase() ===
          question.correct_answer.toUpperCase()
            ? 1
            : 0;
        const attemptId = uuid();
        await db
          .prepare(
            "INSERT INTO attempts (id, user_id, question_id, selected_answer, is_correct, session_id) VALUES (?,?,?,?,?,?)"
          )
          .bind(
            attemptId,
            user.id,
            question_id,
            selected_answer.toUpperCase(),
            isCorrect,
            session_id
          )
          .run();
        const suffix = `_${lang}`;
        return json({
          id: attemptId,
          is_correct: isCorrect === 1,
          correct_answer: question.correct_answer,
          explanation: question[`explanation${suffix}`],
        });
      }

      // ── Sessions ─────────────────────────────────────────────────────────

      if (path === "/api/sessions" && method === "POST") {
        const user = await getUser(request, db);
        if (!user) return err("Missing token", 401);
        const body = await request.json();
        const { session_type, domain = null, total_questions } = body;
        const sessionId = uuid();
        await db
          .prepare(
            "INSERT INTO sessions (id, user_id, session_type, domain, total_questions) VALUES (?,?,?,?,?)"
          )
          .bind(sessionId, user.id, session_type, domain, total_questions)
          .run();
        const session = await db
          .prepare("SELECT * FROM sessions WHERE id = ?")
          .bind(sessionId)
          .first();
        return json(session);
      }

      const sessionPutMatch = path.match(/^\/api\/sessions\/([^/]+)$/);
      if (sessionPutMatch && method === "PUT") {
        const user = await getUser(request, db);
        if (!user) return err("Missing token", 401);
        const sessionId = sessionPutMatch[1];
        const body = await request.json();
        const session = await db
          .prepare(
            "SELECT * FROM sessions WHERE id = ? AND user_id = ?"
          )
          .bind(sessionId, user.id)
          .first();
        if (!session) return err("Session not found", 404);
        const updates = [];
        const params = [];
        if (body.correct_answers !== undefined) {
          updates.push("correct_answers = ?");
          params.push(body.correct_answers);
        }
        if (body.completed !== undefined) {
          updates.push("completed = ?");
          params.push(body.completed);
          if (body.completed === 1) {
            updates.push("completed_at = ?");
            params.push(new Date().toISOString());
          }
        }
        if (updates.length > 0) {
          params.push(sessionId);
          await db
            .prepare(
              `UPDATE sessions SET ${updates.join(", ")} WHERE id = ?`
            )
            .bind(...params)
            .run();
        }
        const updated = await db
          .prepare("SELECT * FROM sessions WHERE id = ?")
          .bind(sessionId)
          .first();
        return json(updated);
      }

      const sessionGetMatch = path.match(/^\/api\/sessions\/([^/]+)$/);
      if (sessionGetMatch && method === "GET") {
        const user = await getUser(request, db);
        if (!user) return err("Missing token", 401);
        const sessionId = sessionGetMatch[1];
        const session = await db
          .prepare(
            "SELECT * FROM sessions WHERE id = ? AND user_id = ?"
          )
          .bind(sessionId, user.id)
          .first();
        if (!session) return err("Session not found", 404);
        const { results: attempts } = await db
          .prepare(
            "SELECT question_id, selected_answer, is_correct FROM attempts WHERE session_id = ?"
          )
          .bind(sessionId)
          .all();
        return json({ ...session, attempts });
      }

      // ── Stats ────────────────────────────────────────────────────────────

      if (path === "/api/stats/me" && method === "GET") {
        const user = await getUser(request, db);
        if (!user) return err("Missing token", 401);
        const uid = user.id;
        const totals = await db
          .prepare(
            "SELECT COUNT(*) as total, SUM(is_correct) as correct FROM attempts WHERE user_id = ?"
          )
          .bind(uid)
          .first();
        const total = totals.total || 0;
        const correct = totals.correct || 0;
        const overallAccuracy =
          total > 0 ? Math.round((correct / total) * 100) : 0;
        const { results: domainRows } = await db
          .prepare(
            `SELECT q.domain, COUNT(*) as total, SUM(a.is_correct) as correct
             FROM attempts a JOIN questions q ON a.question_id = q.id
             WHERE a.user_id = ? GROUP BY q.domain`
          )
          .bind(uid)
          .all();
        const domainStats = domainRows.map((r) => ({
          domain: r.domain,
          total: r.total || 0,
          correct: r.correct || 0,
          accuracy: r.total > 0 ? Math.round((r.correct / r.total) * 100) : 0,
        }));
        const { results: recent } = await db
          .prepare(
            "SELECT * FROM sessions WHERE user_id = ? ORDER BY started_at DESC LIMIT 10"
          )
          .bind(uid)
          .all();
        const { results: dayRows } = await db
          .prepare(
            "SELECT DISTINCT DATE(created_at) as d FROM attempts WHERE user_id = ? ORDER BY d DESC"
          )
          .bind(uid)
          .all();
        let streak = 0;
        const now = new Date();
        for (let i = 0; i < dayRows.length; i++) {
          const expected = new Date(now);
          expected.setDate(expected.getDate() - i);
          const expStr = expected.toISOString().slice(0, 10);
          if (dayRows[i].d === expStr) {
            streak++;
          } else {
            break;
          }
        }
        return json({
          total_questions: total,
          overall_accuracy: overallAccuracy,
          domain_stats: domainStats,
          recent_sessions: recent,
          streak,
        });
      }

      // ── Flashcards ───────────────────────────────────────────────────────

      if (path === "/api/flashcards" && method === "GET") {
        const user = await getUser(request, db);
        if (!user) return err("Missing token", 401);
        const domain = url.searchParams.get("domain");
        let query =
          "SELECT f.*, fp.status FROM flashcards f LEFT JOIN flashcard_progress fp ON f.id = fp.flashcard_id AND fp.user_id = ?";
        const params = [user.id];
        if (domain) {
          query += " WHERE f.domain = ?";
          params.push(domain);
        }
        const { results } = await db
          .prepare(query)
          .bind(...params)
          .all();
        return json(
          results.map((r) => ({
            id: r.id,
            domain: r.domain,
            front_en: r.front_en,
            front_es: r.front_es,
            back_en: r.back_en,
            back_es: r.back_es,
            status: r.status || "new",
          }))
        );
      }

      if (path === "/api/flashcard-progress" && method === "POST") {
        const user = await getUser(request, db);
        if (!user) return err("Missing token", 401);
        const body = await request.json();
        const { flashcard_id, status } = body;
        const progressId = uuid();
        await db
          .prepare(
            `INSERT INTO flashcard_progress (id, user_id, flashcard_id, status, last_reviewed)
             VALUES (?, ?, ?, ?, datetime('now'))
             ON CONFLICT(user_id, flashcard_id) DO UPDATE SET status = excluded.status, last_reviewed = datetime('now')`
          )
          .bind(progressId, user.id, flashcard_id, status)
          .run();
        return json({ status });
      }

      // ── Admin ────────────────────────────────────────────────────────────

      if (path.startsWith("/api/admin")) {
        const adminPw = request.headers.get("X-Admin-Password");
        if (adminPw !== ADMIN_PASSWORD) return err("Unauthorized", 401);

        if (path === "/api/admin/users" && method === "GET") {
          await db
            .prepare(
              "ALTER TABLE users ADD COLUMN disabled INTEGER DEFAULT 0"
            )
            .run()
            .catch(() => {});
          const { results: users } = await db
            .prepare(
              `SELECT u.id, u.email, u.name, u.language, u.exam_date, u.created_at, u.disabled,
                      COUNT(a.id) as total_attempts,
                      SUM(CASE WHEN a.is_correct = 1 THEN 1 ELSE 0 END) as correct_attempts
               FROM users u
               LEFT JOIN attempts a ON u.id = a.user_id
               GROUP BY u.id
               ORDER BY u.created_at DESC`
            )
            .all();
          return json(users);
        }

        if (path === "/api/admin/users" && method === "POST") {
          const body = await request.json();
          const {
            email,
            password,
            name,
            language = "es",
            exam_date = null,
          } = body;
          if (!email || !password || !name) return err("Missing fields");
          const existing = await db
            .prepare("SELECT id FROM users WHERE email = ?")
            .bind(email)
            .first();
          if (existing) return err("Email already registered");
          const userId = uuid();
          const pwHash = await hashPassword(password);
          await db
            .prepare(
              "INSERT INTO users (id, email, password_hash, name, language, exam_date) VALUES (?,?,?,?,?,?)"
            )
            .bind(userId, email, pwHash, name, language, exam_date)
            .run();
          return json({ created: true, user: { id: userId, email, name } });
        }

        const toggleMatch = path.match(
          /^\/api\/admin\/users\/([^/]+)\/toggle$/
        );
        if (toggleMatch && method === "PUT") {
          const userId = toggleMatch[1];
          await db
            .prepare(
              "ALTER TABLE users ADD COLUMN disabled INTEGER DEFAULT 0"
            )
            .run()
            .catch(() => {});
          const user = await db
            .prepare(
              "SELECT id, email, name, disabled FROM users WHERE id = ?"
            )
            .bind(userId)
            .first();
          if (!user) return err("User not found", 404);
          const newStatus = user.disabled === 1 ? 0 : 1;
          await db
            .prepare("UPDATE users SET disabled = ? WHERE id = ?")
            .bind(newStatus, userId)
            .run();
          return json({
            id: user.id,
            email: user.email,
            name: user.name,
            disabled: newStatus,
          });
        }

        const resetMatch = path.match(
          /^\/api\/admin\/users\/([^/]+)\/reset-password$/
        );
        if (resetMatch && method === "PUT") {
          const userId = resetMatch[1];
          const body = await request.json();
          const { new_password } = body;
          if (!new_password) return err("Missing new_password");
          const user = await db
            .prepare("SELECT id, email, name FROM users WHERE id = ?")
            .bind(userId)
            .first();
          if (!user) return err("User not found", 404);
          const pwHash = await hashPassword(new_password);
          await db
            .prepare("UPDATE users SET password_hash = ? WHERE id = ?")
            .bind(pwHash, userId)
            .run();
          return json({
            reset: true,
            user: { id: user.id, email: user.email, name: user.name },
          });
        }

        const activityMatch = path.match(
          /^\/api\/admin\/users\/([^/]+)\/activity$/
        );
        if (activityMatch && method === "GET") {
          const userId = activityMatch[1];
          const user = await db
            .prepare(
              "SELECT id, email, name, language, exam_date, created_at FROM users WHERE id = ?"
            )
            .bind(userId)
            .first();
          if (!user) return err("User not found", 404);
          const { results: sessions } = await db
            .prepare(
              "SELECT * FROM sessions WHERE user_id = ? ORDER BY started_at DESC"
            )
            .bind(userId)
            .all();
          const { results: recentAttempts } = await db
            .prepare(
              `SELECT a.created_at, a.is_correct, a.selected_answer, q.domain,
                      q.question_en, q.question_es, q.correct_answer
               FROM attempts a JOIN questions q ON a.question_id = q.id
               WHERE a.user_id = ? ORDER BY a.created_at DESC LIMIT 50`
            )
            .bind(userId)
            .all();
          const totals = await db
            .prepare(
              "SELECT COUNT(*) as total, SUM(is_correct) as correct FROM attempts WHERE user_id = ?"
            )
            .bind(userId)
            .first();
          const { results: domainRows } = await db
            .prepare(
              `SELECT q.domain, COUNT(*) as total, SUM(a.is_correct) as correct
               FROM attempts a JOIN questions q ON a.question_id = q.id
               WHERE a.user_id = ? GROUP BY q.domain`
            )
            .bind(userId)
            .all();
          return json({
            user,
            summary: { total: totals.total || 0, correct: totals.correct || 0 },
            domain_stats: domainRows.map((r) => ({
              domain: r.domain,
              total: r.total,
              correct: r.correct,
            })),
            sessions,
            recent_attempts: recentAttempts,
          });
        }

        if (path === "/api/admin/export" && method === "GET") {
          await db
            .prepare(
              "ALTER TABLE users ADD COLUMN disabled INTEGER DEFAULT 0"
            )
            .run()
            .catch(() => {});
          const { results: users } = await db
            .prepare(
              `SELECT u.id, u.email, u.name, u.language, u.exam_date, u.created_at, u.disabled,
                      COUNT(a.id) as total_attempts,
                      SUM(CASE WHEN a.is_correct = 1 THEN 1 ELSE 0 END) as correct_attempts
               FROM users u
               LEFT JOIN attempts a ON u.id = a.user_id
               GROUP BY u.id
               ORDER BY u.created_at DESC`
            )
            .all();
          let csv =
            "Name,Email,Language,Registered,Attempts,Correct,Accuracy,Status\n";
          for (const u of users) {
            const acc =
              u.total_attempts > 0
                ? Math.round((u.correct_attempts / u.total_attempts) * 100) +
                  "%"
                : "N/A";
            const status = u.disabled === 1 ? "Disabled" : "Active";
            csv += `"${u.name}","${u.email}","${u.language}","${u.created_at}",${u.total_attempts},${u.correct_attempts || 0},"${acc}","${status}"\n`;
          }
          return new Response(csv, {
            headers: {
              "Content-Type": "text/csv",
              "Content-Disposition": "attachment; filename=users.csv",
              ...CORS_HEADERS,
            },
          });
        }

        const deleteMatch = path.match(/^\/api\/admin\/users\/([^/]+)$/);
        if (deleteMatch && method === "DELETE") {
          const userId = deleteMatch[1];
          const user = await db
            .prepare("SELECT id, email, name FROM users WHERE id = ?")
            .bind(userId)
            .first();
          if (!user) return err("User not found", 404);
          await db
            .prepare("DELETE FROM flashcard_progress WHERE user_id = ?")
            .bind(userId)
            .run();
          await db
            .prepare("DELETE FROM attempts WHERE user_id = ?")
            .bind(userId)
            .run();
          await db
            .prepare("DELETE FROM sessions WHERE user_id = ?")
            .bind(userId)
            .run();
          await db
            .prepare("DELETE FROM users WHERE id = ?")
            .bind(userId)
            .run();
          return json({
            deleted: true,
            user: { id: user.id, email: user.email, name: user.name },
          });
        }

        if (path === "/api/admin/stats" && method === "GET") {
          const userCount = await db
            .prepare("SELECT COUNT(*) as count FROM users")
            .first();
          const questionCount = await db
            .prepare("SELECT COUNT(*) as count FROM questions")
            .first();
          const attemptCount = await db
            .prepare("SELECT COUNT(*) as count FROM attempts")
            .first();
          const sessionCount = await db
            .prepare("SELECT COUNT(*) as count FROM sessions")
            .first();
          return json({
            users: userCount.count,
            questions: questionCount.count,
            attempts: attemptCount.count,
            sessions: sessionCount.count,
          });
        }
      }

      return err("Not found", 404);
    } catch (e) {
      console.error(e);
      return err(e.message || "Internal error", 500);
    }
  },
};
