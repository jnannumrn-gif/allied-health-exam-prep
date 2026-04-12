# Allied Health Exam Prep

A bilingual (EN/ES) Progressive Web App for Allied Health certification exam preparation, covering disciplines such as Medical Assisting, Phlebotomy, Pharmacy Technician, and Health Information Technology.

## Features

- **Practice Mode** — Study questions by domain with instant feedback and explanations
- **Mock Exam** — Timed full-length exam simulation with question flagging
- **Flashcards** — Spaced repetition system (new → learning → mastered)
- **Statistics** — Track accuracy by domain, study streaks, and session history
- **Bilingual** — Full English/Spanish support with persistent language preference
- **PWA** — Installable on mobile devices with offline capability
- **Admin Panel** — User management, stats overview, CSV export

## Architecture

### Frontend (`/app`)
- React + TypeScript + Vite
- Tailwind CSS (dark theme)
- React Router for navigation
- Context API for auth and i18n state
- Service Worker for offline support

### Backend (`/api`)
- Cloudflare Worker
- D1 (SQLite) database
- JWT authentication (HMAC-SHA256)
- PBKDF2 password hashing
- RESTful API endpoints

## Configuration

The app uses a configuration system (`src/config.ts`) for exam settings:

| Setting | Value |
|---------|-------|
| Theme Color | Teal (#0d9488) |
| Exam Questions | 100 |
| Storage Prefix | allied_health |

Set `VITE_EXAM_TYPE=AH` in `.env`.

## Getting Started

### Frontend
```bash
cd app
npm install
npm run dev      # Development server at http://localhost:5173
npm run build    # Production build to dist/
```

### Backend
```bash
cd api
npm install
npx wrangler dev   # Local dev server
npx wrangler d1 execute allied-health-prep-db --file=schema.sql   # Initialize DB
npx wrangler d1 execute allied-health-prep-db --file=seed.sql      # Seed questions
npx wrangler deploy                                                 # Deploy to Cloudflare
```

## API Endpoints

### Authentication
- `POST /api/auth/register` — Register new user
- `POST /api/auth/login` — Login

### User
- `GET /api/user/me` — Get current user
- `PUT /api/user/me` — Update profile/password

### Questions
- `GET /api/questions` — List questions (with domain/limit filters)
- `GET /api/questions/random` — Random questions

### Practice
- `POST /api/attempts` — Record an answer attempt
- `POST /api/sessions` — Create a study session
- `PUT /api/sessions/:id` — Update session (complete)
- `GET /api/sessions/:id` — Get session with attempts

### Stats
- `GET /api/stats/me` — User statistics and streaks

### Flashcards
- `GET /api/flashcards` — List flashcards (with domain filter)
- `POST /api/flashcard-progress` — Update flashcard status

### Admin (requires X-Admin-Password header)
- `GET /api/admin/users` — List all users with stats
- `POST /api/admin/users` — Create user
- `PUT /api/admin/users/:id/toggle` — Enable/disable user
- `PUT /api/admin/users/:id/reset-password` — Reset password
- `GET /api/admin/users/:id/activity` — View user activity
- `DELETE /api/admin/users/:id` — Delete user
- `GET /api/admin/stats` — Platform statistics
- `GET /api/admin/export` — Export users CSV

## Question Domains

1. **Medical Assisting** — Clinical procedures, patient intake, vital signs, EKG, injections, phlebotomy basics
2. **Pharmacy Technician** — Medication classifications, dosage calculations, pharmacy law, compounding, dispensing
3. **Health Information Technology** — Medical coding (ICD/CPT), health records management, HIPAA, EHR systems
4. **Patient Care & Safety** — Infection control, emergency procedures, body mechanics, patient communication, ethics

## Database Schema

- `users` — User accounts with auth and preferences
- `questions` — Bilingual exam questions with explanations
- `attempts` — Individual answer records
- `sessions` — Practice/exam session tracking
- `flashcards` — Bilingual study cards
- `flashcard_progress` — Per-user flashcard status
