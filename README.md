# NOVA Global Intelligence — merged V3

This package keeps the uploaded NOVA Global Intelligence dashboard (`index.html`) and pairs it with the existing Node backend, plus `package.json`, Dockerfile, manifest and service worker.

## Render deployment
1. Upload these files to the same GitHub repository folder (replace `index.html` and `server.js` only after keeping a backup).
2. Create/use a Render **Web Service** from that repository.
3. Runtime: Docker (uses `Dockerfile`) or Node. For Node, Build Command can be `npm install`; Start Command `npm start`.
4. Add `OPENAI_API_KEY` in Render → Environment. Optionally set `OPENAI_MODEL` to a model available to your API account.
5. Deploy and open `/api/health`. It should return `status: ok`. `aiConfigured` is true only when the API key is configured.

## Notes
- No API key belongs in `index.html` or GitHub.
- The dashboard can show offline mode if opened on GitHub Pages because its `/api/*` endpoints require the backend service. The frontend must be served from the same backend origin for relative API calls to work.
- Free hosting may sleep and local disk storage may not be persistent. This prototype does not guarantee income or run background tasks while offline.
