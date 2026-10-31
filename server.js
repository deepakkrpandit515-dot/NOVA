const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 10000;

const OPENAI_API_KEY = process.env.OPENAI_API_KEY || "";
const OPENAI_MODEL = process.env.OPENAI_MODEL || "gpt-5.6";

// CORS FIX — frontend ko backend se connect karne ke liye
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

app.use(express.json({ limit: "1mb" }));
app.use(express.static(path.join(__dirname, "public")));

// Backend health
app.get("/api/health", (_req, res) => {
  res.json({
    ok: true,
    backend: "online",
    aiConfigured: Boolean(OPENAI_API_KEY),
    model: OPENAI_API_KEY ? OPENAI_MODEL : null,
    version: "NOVA V7"
  });
});

// AI Chat
app.post("/api/chat", async (req, res) => {
  try {
    const message = String(req.body?.message || "").trim();
    const history = Array.isArray(req.body?.history)
      ? req.body.history.slice(-12)
      : [];

    if (!message) {
      return res.status(400).json({
        error: "Message is required."
      });
    }

    if (!OPENAI_API_KEY) {
      return res.status(503).json({
        error: "AI key is not configured on the backend.",
        hint: "Add OPENAI_API_KEY in Render Environment settings."
      });
    }

    const input = [];

    for (const item of history) {
      const role =
        item?.role === "assistant" ? "assistant" : "user";

      const content = String(item?.content || "").slice(0, 4000);

      if (content) {
        input.push({ role, content });
      }
    }

    input.push({ role: "user", content: message });

    const response = await fetch(
      "https://api.openai.com/v1/responses",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: OPENAI_MODEL,
          instructions:
            "You are NOVA, a helpful personal AI assistant. Reply clearly and practically. Use Hindi or Hinglish when the user does. Do not claim to have performed actions, made purchases, sent messages, or accessed live data unless a connected tool actually did so. Ask for permission before consequential external actions. For financial topics, explain uncertainty and never promise earnings.",
          input
        })
      }
    );

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      const detail =
        data?.error?.message ||
        `OpenAI request failed (${response.status}).`;

      return res.status(response.status).json({
        error: detail
      });
    }

    let answer = data.output_text || "";

    if (!answer && Array.isArray(data.output)) {
      answer = data.output
        .flatMap(x => x.content || [])
        .filter(x => x.type === "output_text")
        .map(x => x.text)
        .join("\n");
    }

    if (!answer) {
      answer = "I received a response, but no text was returned.";
    }

    res.json({
      ok: true,
      reply: answer,
      model: OPENAI_MODEL
    });

  } catch (err) {
    console.error("NOVA chat error:", err);

    res.status(500).json({
      error: "Backend error. Check the Render service logs."
    });
  }
});

// Frontend
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`NOVA V7 listening on port ${PORT}`);
  console.log(`AI key configured: ${Boolean(OPENAI_API_KEY)}`);
});const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 10000;

const OPENAI_API_KEY = process.env.OPENAI_API_KEY || "";
const OPENAI_MODEL = process.env.OPENAI_MODEL || "gpt-5.6";

// CORS FIX — frontend ko backend se connect karne ke liye
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

app.use(express.json({ limit: "1mb" }));
app.use(express.static(path.join(__dirname, "public")));

// Backend health
app.get("/api/health", (_req, res) => {
  res.json({
    ok: true,
    backend: "online",
    aiConfigured: Boolean(OPENAI_API_KEY),
    model: OPENAI_API_KEY ? OPENAI_MODEL : null,
    version: "NOVA V7"
  });
});

// AI Chat
app.post("/api/chat", async (req, res) => {
  try {
    const message = String(req.body?.message || "").trim();
    const history = Array.isArray(req.body?.history)
      ? req.body.history.slice(-12)
      : [];

    if (!message) {
      return res.status(400).json({
        error: "Message is required."
      });
    }

    if (!OPENAI_API_KEY) {
      return res.status(503).json({
        error: "AI key is not configured on the backend.",
        hint: "Add OPENAI_API_KEY in Render Environment settings."
      });
    }

    const input = [];

    for (const item of history) {
      const role =
        item?.role === "assistant" ? "assistant" : "user";

      const content = String(item?.content || "").slice(0, 4000);

      if (content) {
        input.push({ role, content });
      }
    }

    input.push({ role: "user", content: message });

    const response = await fetch(
      "https://api.openai.com/v1/responses",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: OPENAI_MODEL,
          instructions:
            "You are NOVA, a helpful personal AI assistant. Reply clearly and practically. Use Hindi or Hinglish when the user does. Do not claim to have performed actions, made purchases, sent messages, or accessed live data unless a connected tool actually did so. Ask for permission before consequential external actions. For financial topics, explain uncertainty and never promise earnings.",
          input
        })
      }
    );

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      const detail =
        data?.error?.message ||
        `OpenAI request failed (${response.status}).`;

      return res.status(response.status).json({
        error: detail
      });
    }

    let answer = data.output_text || "";

    if (!answer && Array.isArray(data.output)) {
      answer = data.output
        .flatMap(x => x.content || [])
        .filter(x => x.type === "output_text")
        .map(x => x.text)
        .join("\n");
    }

    if (!answer) {
      answer = "I received a response, but no text was returned.";
    }

    res.json({
      ok: true,
      reply: answer,
      model: OPENAI_MODEL
    });

  } catch (err) {
    console.error("NOVA chat error:", err);

    res.status(500).json({
      error: "Backend error. Check the Render service logs."
    });
  }
});

// Frontend
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`NOVA V7 listening on port ${PORT}`);
  console.log(`AI key configured: ${Boolean(OPENAI_API_KEY)}`);
});
