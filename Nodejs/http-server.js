/*
  HTTP Server (http)
  ------------------
  Create a basic web server without Express.

  Note: Read and learn only. For real apps, frameworks like Express or Fastify are common.
*/

const httpExample = `
const http = require("http");

const server = http.createServer((req, res) => {
  // req.method  → "GET", "POST", etc.
  // req.url     → "/users?id=1"

  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello from Node.js!");
    return;
  }

  if (req.url === "/api/users" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify([{ id: 1, name: "Subash" }]));
    return;
  }

  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Not Found");
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(\`Server running at http://localhost:\${PORT}\`);
});
`;

console.log("--- HTTP Server ---");
console.log("http.createServer((req, res) => { … })");
console.log("res.writeHead(status, headers)");
console.log("res.end(body)  — send response and close");
console.log("server.listen(port, callback)");
console.log("");
console.log("Example:\n", httpExample);
