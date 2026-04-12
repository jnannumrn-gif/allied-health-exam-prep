# Allied Health Exam Prep — Local Dev & Testing

## Architecture
- **Frontend** (`app/`): React 18 + TypeScript + Vite + Tailwind, port 5173
- **Backend API** (`api/`): Cloudflare Workers + D1 (SQLite), port 8787
- **AI Tutor Proxy** (`proxy/`): Cloudflare Worker forwarding to Anthropic Claude API, port 8788 (local) or deployed at `https://allied-health-tutor-proxy.jnannum-rn.workers.dev`

## Starting Local Dev
```bash
# Terminal 1: Backend API
cd api && npx wrangler dev --port 8787

# Terminal 2: Frontend
cd app && npm run dev -- --host 0.0.0.0 --port 5173

# Terminal 3 (optional): AI Tutor proxy for local testing
cd proxy && npm run dev
```

## Database Seeding
The local D1 database resets when the backend restarts. Re-seed with:
```bash
cd api
npx wrangler d1 execute allied-health-prep-db --local --file=schema.sql
npx wrangler d1 execute allied-health-prep-db --local --file=seed.sql
```

## Test Accounts
No pre-seeded test accounts — register at `/register` after seeding the DB.
Example: Name="Test User", Email="test@example.com", Password="Test1234!"

## Proxy Deployment
```bash
cd proxy
npx wrangler secret put ANTHROPIC_API_KEY  # Set the Anthropic API key
npx wrangler deploy                        # Deploy to Cloudflare Workers
```
Deployed URL: `https://allied-health-tutor-proxy.jnannum-rn.workers.dev`

## Lint & Build
```bash
cd app && npm run lint
cd app && npm run build
```

## Key Features to Test
- **AI Tutor** (`/tutor`): Division selection (4 cards), chat with Claude, topic pills, suggestion cards, bilingual EN/ES
- **Practice Mode** (`/practice`): Domain selection, questions with instant feedback
- **Mock Exam** (`/exam`): 100 questions, 150-min timer
- **Flashcards** (`/flashcards`): Spaced repetition with mastery tracking
- **Language Toggle**: Globe icon in navbar switches EN/ES for all UI
