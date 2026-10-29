const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const API_KEY = process.env.OPENAI_API_KEY || "";
const MODEL = process.env.OPENAI_MODEL || "gpt-5.6";

const ROOT = __dirname;

const server = http.createServer(async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    return res.end();
  }

  const url = new URL(req.url, `http://${req.headers.host}`);

  if (url.pathname === "/api/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({
      ok: true,
      backend: "online",
      aiConfigured: Boolean(API_KEY)
    }));
  }

  if (url.pathname === "/api/chat" && req.method === "POST") {
    if (!API_KEY) {
      res.writeHead(503, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({
        error: "AI key not configured. Set OPENAI_API_KEY in Render Environment."
      }));
    }

    try {
      let body = "";

      for await (const chunk of req) {
        body += chunk;
        if (body.length > 100000) {
          res.writeHead(413);
          return res.end("Request too large");
        }
      }

      const data = JSON.parse(body || "{}");
      const message = data.message || data.text || data.prompt;

      if (!message) {
        res.writeHead(400, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ error: "Message is required" }));
      }

      const response = await fetch(
        "https://api.openai.com/v1/responses",
        {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            model: MODEL,
            input: String(message)
          })
        }
      );

      const result = await response.json();

      if (!response.ok) {
        res.writeHead(response.status, {
          "Content-Type": "application/json"
        });
        return res.end(JSON.stringify({
          error: result.error?.message || "AI request failed"
        }));
      }

      const reply =
        result.output_text ||
        (result.output || [])
          .flatMap(item => item.content || [])
          .filter(item => item.type === "output_text")
          .map(item => item.text)
          .join("\n") ||
        "NOVA could not generate a reply.";

      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({
        reply,
        answer: reply,
        response: reply
      }));

    } catch (error) {
      res.writeHead(500, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({
        error: "Server error: " + error.message
      }));
    }
  }

  const requested = url.pathname === "/"
    ? "index.html"
    : decodeURIComponent(url.pathname).replace(/^\/+/, "");

  const filePath = path.resolve(ROOT, requested);

  if (
    filePath !== ROOT &&
    !filePath.startsWith(ROOT + path.sep)
  ) {
    res.writeHead(403);
    return res.end("Forbidden");
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      return res.end("File not found");
    }

    const ext = path.extname(filePath).toLowerCase();
    const types = {
      ".html": "text/html; charset=utf-8",
      ".js": "application/javascript; charset=utf-8",
      ".css": "text/css; charset=utf-8",
      ".json": "application/json; charset=utf-8",
      ".png": "image/png",
      ".svg": "image/svg+xml",
      ".ico": "image/x-icon"
    };

    res.writeHead(200, {
      "Content-Type": types[ext] || "application/octet-stream"
    });
    res.end(content);
  });
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`NOVA backend running on port ${PORT}`);
});
