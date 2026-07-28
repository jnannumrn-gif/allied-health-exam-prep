-- Allied Health Prep Database Schema

CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  name TEXT NOT NULL,
  language TEXT DEFAULT 'es',
  exam_date TEXT,
  certification TEXT DEFAULT 'medical_assisting',
  created_at TEXT DEFAULT (datetime('now')),
  disabled INTEGER DEFAULT 0
);

CREATE TABLE IF NOT EXISTS questions (
  id TEXT PRIMARY KEY,
  domain TEXT NOT NULL,
  difficulty TEXT DEFAULT 'medium',
  question_en TEXT NOT NULL,
  question_es TEXT NOT NULL,
  option_a_en TEXT NOT NULL,
  option_a_es TEXT NOT NULL,
  option_b_en TEXT NOT NULL,
  option_b_es TEXT NOT NULL,
  option_c_en TEXT NOT NULL,
  option_c_es TEXT NOT NULL,
  option_d_en TEXT NOT NULL,
  option_d_es TEXT NOT NULL,
  correct_answer TEXT NOT NULL,
  explanation_en TEXT,
  explanation_es TEXT
);

CREATE TABLE IF NOT EXISTS attempts (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  question_id TEXT NOT NULL,
  selected_answer TEXT NOT NULL,
  is_correct INTEGER NOT NULL,
  session_id TEXT,
  created_at TEXT DEFAULT (datetime('now')),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (question_id) REFERENCES questions(id)
);

CREATE TABLE IF NOT EXISTS sessions (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  session_type TEXT NOT NULL,
  domain TEXT,
  total_questions INTEGER DEFAULT 0,
  correct_answers INTEGER DEFAULT 0,
  completed INTEGER DEFAULT 0,
  started_at TEXT DEFAULT (datetime('now')),
  completed_at TEXT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS flashcards (
  id TEXT PRIMARY KEY,
  domain TEXT NOT NULL,
  front_en TEXT NOT NULL,
  front_es TEXT NOT NULL,
  back_en TEXT NOT NULL,
  back_es TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS flashcard_progress (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  flashcard_id TEXT NOT NULL,
  status TEXT DEFAULT 'new',
  last_reviewed TEXT DEFAULT (datetime('now')),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (flashcard_id) REFERENCES flashcards(id),
  UNIQUE(user_id, flashcard_id)
);

CREATE INDEX IF NOT EXISTS idx_attempts_user ON attempts(user_id);
CREATE INDEX IF NOT EXISTS idx_attempts_session ON attempts(session_id);
CREATE INDEX IF NOT EXISTS idx_sessions_user ON sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_questions_domain ON questions(domain);
CREATE INDEX IF NOT EXISTS idx_flashcard_progress_user ON flashcard_progress(user_id);
