/*
  HTTP Server (http)
  ------------------
  Create a basic web server without Express.
  Uncomment server.listen() to start it on port 3000.
*/

const http = require("http");

const server = http.createServer((req, res) => {
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

console.log("--- HTTP Server ---");
console.log("Server created:", typeof server.listen === "function");
console.log("Routes: GET /  and  GET /api/users");
console.log("To start: server.listen(3000, () => console.log('Running on :3000'))");

// server.listen(3000, () => console.log("Running on http://localhost:3000"));
