import config from "./config";

const API = config.apiUrl;

function getToken(): string | null {
  return localStorage.getItem(`${config.storagePrefix}_token`);
}

function authHeaders(): Record<string, string> {
  const token = getToken();
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (token) headers["Authorization"] = `Bearer ${token}`;
  return headers;
}

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API}${path}`, {
    ...options,
    headers: { ...authHeaders(), ...options?.headers },
  });
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error((data as { error?: string }).error || `HTTP ${res.status}`);
  }
  return res.json();
}

export interface User {
  id: string;
  email: string;
  name: string;
  language: string;
  exam_date: string | null;
  certification: string;
}

export interface Question {
  id: string;
  domain: string;
  difficulty: string;
  question_en: string;
  question_es: string;
  option_a_en: string;
  option_a_es: string;
  option_b_en: string;
  option_b_es: string;
  option_c_en: string;
  option_c_es: string;
  option_d_en: string;
  option_d_es: string;
}

export interface AttemptResult {
  is_correct: boolean;
  correct_answer: string;
  explanation: string;
}

export interface Session {
  id: string;
  session_type: string;
  total_questions: number;
  correct_answers: number;
  started_at: string;
}

export interface Flashcard {
  id: string;
  domain: string;
  front_en: string;
  front_es: string;
  back_en: string;
  back_es: string;
  status: "new" | "learning" | "mastered";
}

export interface DomainStat {
  domain: string;
  total: number;
  correct: number;
  accuracy: number;
}

export interface UserStats {
  total_questions: number;
  correct_answers: number;
  overall_accuracy: number;
  streak: number;
  domain_stats: DomainStat[];
  recent_sessions: Session[];
}

const api = {
  register: (data: { email: string; password: string; name: string; language: string; exam_date: string | null; certification?: string }) =>
    request<{ token: string; user: User }>("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  login: (email: string, password: string) =>
    request<{ token: string; user: User }>("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }),

  getMe: () => request<User>("/api/user/me"),

  updateMe: (data: Record<string, string | null>) =>
    request<User>("/api/user/me", {
      method: "PUT",
      body: JSON.stringify(data),
    }),

  getRandomQuestions: (params: { domain?: string; limit?: number }) => {
    const sp = new URLSearchParams();
    if (params.domain) sp.set("domain", params.domain);
    if (params.limit) sp.set("limit", String(params.limit));
    return request<Question[]>(`/api/questions/random?${sp.toString()}`);
  },

  recordAttempt: (data: { question_id: string; selected_answer: string; session_id: string | null }) =>
    request<AttemptResult>("/api/attempts", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  createSession: (data: { session_type: string; domain?: string | null; total_questions: number }) =>
    request<Session>("/api/sessions", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  updateSession: (id: string, data: { correct_answers: number; completed: number }) =>
    request<{ success: boolean }>(`/api/sessions/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),

  getStats: () => request<UserStats>("/api/stats/me"),

  getFlashcards: (domain?: string) => {
    const sp = new URLSearchParams();
    if (domain) sp.set("domain", domain);
    return request<Flashcard[]>(`/api/flashcards?${sp.toString()}`);
  },

  updateFlashcardProgress: (flashcardId: string, status: string) =>
    request<{ success: boolean }>("/api/flashcard-progress", {
      method: "POST",
      body: JSON.stringify({ flashcard_id: flashcardId, status }),
    }),
};

export default api;
