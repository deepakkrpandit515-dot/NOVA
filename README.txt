NOVA V7 — FULL PROJECT
======================

WHAT IS INCLUDED
- Responsive mobile-first NOVA dashboard
- AI chat through a server-side OpenAI Responses API request
- Backend health check at /api/health
- Voice input/output when supported by the browser
- RUKO / STOP button
- Backend URL settings
- Basic tasks, money dashboard placeholders, file picker, and PWA shell

IMPORTANT: "BACKGROUND ONLINE"
This package is deploy-ready, but it cannot publish itself to your Render account.
Deploy it as a Render WEB SERVICE (not a Static Site). Render free web services can
spin down after inactivity, so they are not guaranteed to run continuously 24/7.
The app checks the backend when opened; it does not secretly run when the phone is off.

RENDER SETTINGS
1. Upload/extract these files into your GitHub NOVA repository, preserving folders.
2. In Render, create/use a Node Web Service connected to that repository.
3. Build Command: npm install
4. Start Command: npm start
5. Health Check Path: /api/health
6. In Render > Environment, add:
   OPENAI_API_KEY = your private OpenAI API key
   OPENAI_MODEL = gpt-5.6
7. Save and deploy. Never put the API key in index.html or send it in chat.
8. Open https://YOUR-SERVICE.onrender.com/api/health
   Expected: {"ok":true,"backend":"online","aiConfigured":true,...}

IF FRONTEND IS ON GITHUB PAGES
Open NOVA > Settings > Backend & Integrations and enter your Render Web Service
base URL (for example, https://your-service.onrender.com), then Save Settings.
If frontend and backend are on the same Render Web Service, leave the URL blank.

KNOWN LIMITATIONS
- Market prices and web search are not connected in this starter package.
- Tasks and chat history are browser/session based; no database or cross-device sync.
- Money values are placeholders/manual; no bank connection or guaranteed income.
- Voice recognition availability depends on browser/device permissions.
- Background operation while the phone is powered off is not possible from this web app.
- Render free services may sleep after inactivity; first request can take time to wake.

SECURITY
Keep OPENAI_API_KEY only in Render Environment Variables. Do not share screenshots
that reveal secret values. Do not commit .env files or API keys to GitHub.
