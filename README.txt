NOVA V3 — Full Website + Backend

Files:
- index.html: NOVA chat and voice interface
- server.js: Node.js backend, /api/health and /api/chat
- Dockerfile: Render Docker deployment
- package.json: Node project settings
- manifest.json and sw.js: installable web app support

Render environment variable required for AI:
OPENAI_API_KEY = your own OpenAI API key
Optional:
OPENAI_MODEL = gpt-4.1-mini

Deploy this folder/repository using the included Dockerfile.
The server listens on process.env.PORT supplied by Render.
Never put your API key in index.html or commit it to GitHub.
