/**
 * Allied Health Tutor Proxy — Cloudflare Worker
 * Forwards chat requests to Anthropic Claude API.
 * Keeps the API key server-side and adds CORS headers.
 */

// Single source of truth for the tutor model. A client-supplied `model` is
// ignored so that a model swap is a redeploy of this worker alone, and so cached
// or stale pages pinned to a retired model keep working.
const MODEL = 'claude-sonnet-4-5-20250929';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    if (request.method !== 'POST') {
      return Response.json(
        { error: { message: 'Method not allowed' } },
        { status: 405, headers: CORS_HEADERS }
      );
    }

    try {
      const body = await request.json();
      const { max_tokens, system, messages } = body;

      if (!messages || !Array.isArray(messages) || messages.length === 0) {
        return Response.json(
          { error: { message: 'messages array is required' } },
          { status: 400, headers: CORS_HEADERS }
        );
      }

      const anthropicResponse = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: MODEL,
          max_tokens: max_tokens || 1000,
          system: system || '',
          messages,
        }),
      });

      const data = await anthropicResponse.json();
      return Response.json(data, { headers: CORS_HEADERS });
    } catch (err) {
      return Response.json(
        { error: { message: 'Proxy error: ' + err.message } },
        { status: 500, headers: CORS_HEADERS }
      );
    }
  },
};
