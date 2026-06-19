const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 4173;
const WEB_DIR = path.join(__dirname, "web");

const mimeTypes = {
  ".html": "text/html; charset=UTF-8",
  ".js": "text/javascript; charset=UTF-8",
  ".css": "text/css; charset=UTF-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".json": "application/json; charset=UTF-8",
  ".webp": "image/webp",
  ".pdf": "application/pdf",
};

const server = http.createServer((req, res) => {
  let requestPath = decodeURIComponent(req.url.split("?")[0]);

  if (requestPath === "/") {
    requestPath = "/index.html";
  }

  const filePath = path.join(WEB_DIR, requestPath);

  if (!filePath.startsWith(WEB_DIR)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      const fallback = path.join(WEB_DIR, "index.html");

      fs.readFile(fallback, (fallbackErr, fallbackData) => {
        if (fallbackErr) {
          res.writeHead(404);
          res.end("Not Found");
          return;
        }

        res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
        res.end(fallbackData);
      });

      return;
    }

    const ext = path.extname(filePath);
    const contentType = mimeTypes[ext] || "application/octet-stream";

    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`App is running at http://localhost:${PORT}`);
  console.log("Press Ctrl + C to stop.");
});