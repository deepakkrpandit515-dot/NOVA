# NOVA V5 — 3D-style mobile UI + AI backend

`index.html` is the mobile-first interface; `server.js` is the Node API (`/api/health`, `/api/chat`, `/api/research`). `package.json`, `Dockerfile`, `render.yaml` support Render deployment; `manifest.json` and `sw.js` provide a basic PWA shell.

## Deploy notes
- The UI is 3D-style, not a true hologram. Real AI needs a deployed backend and a valid API key.
- Deploy `server.js` as a Render **Web Service** with Docker runtime. GitHub Pages is static and cannot run Node server code.
- Add `OPENAI_API_KEY` only in Render Dashboard → service → Environment. Never upload an actual `.env` or API key to GitHub.
- Set `OPENAI_MODEL` to a model enabled for your API account. API usage may cost money.
- After deploy, copy the service URL into NOVA's Backend Settings and press Check Backend.
- Voice requires browser support and microphone permission; background microphone while locked is not guaranteed. Web research depends on API/model web-search support.
