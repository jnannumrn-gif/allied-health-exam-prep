# Allied Health Tutor Proxy

Cloudflare Worker that forwards AI Tutor chat requests to the Anthropic Messages API,
keeping the API key server-side.

Deployed: https://allied-health-tutor-proxy.jnannum-rn.workers.dev

## Model

`MODEL` in `src/index.js` is the single source of truth. A client-supplied `model`
is ignored, so swapping models means editing this worker and redeploying it — no app
deploy needed, and stale/cached pages pinned to an old model keep working.

List the models the configured key can use:

```bash
curl -s https://api.anthropic.com/v1/models \
  -H "x-api-key: $ANTHROPIC_API_KEY" \
  -H "anthropic-version: 2023-06-01"
```

## Deploy

```bash
npx wrangler deploy
```

## Secrets

```bash
npx wrangler secret put ANTHROPIC_API_KEY
```

## Logs

```bash
npx wrangler tail allied-health-tutor-proxy
```
