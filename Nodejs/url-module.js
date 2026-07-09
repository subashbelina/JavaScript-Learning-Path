/*
  URL Module
  ----------
  Parse, format, and work with URLs (WHATWG URL API in Node).

  Note: Read and learn only. Prefer URL over manual string splitting.
*/

const urlExample = `
const { URL, URLSearchParams } = require("url");

// Parse a full URL
const site = new URL("https://example.com:8080/path/page?id=42&sort=asc#section");

site.protocol   // "https:"
site.hostname   // "example.com"
site.port       // "8080"
site.pathname   // "/path/page"
site.search     // "?id=42&sort=asc"
site.hash       // "#section"

// Query string helpers
site.searchParams.get("id");     // "42"
site.searchParams.set("page", "2");
site.searchParams.toString();    // "id=42&sort=asc&page=2"

// Build a URL
const api = new URL("/api/users", "https://api.example.com");
api.searchParams.append("limit", "10");
// https://api.example.com/api/users?limit=10

// file:// URLs for local paths
const fileUrl = new URL("file:///home/user/data.json");
`;

console.log("--- URL Module ---");
console.log("new URL(input, base?)     — parse or build URLs");
console.log("url.searchParams.get(key) — read query param");
console.log("url.searchParams.set()    — update query param");
console.log("URLSearchParams           — standalone query strings");
console.log("");
console.log("Example:\n", urlExample);

// Live demo
const demo = new URL("https://api.github.com/repos/nodejs/node/issues?state=open");
console.log("Demo parse:");
console.log("  hostname:", demo.hostname);
console.log("  pathname:", demo.pathname);
console.log("  state param:", demo.searchParams.get("state"));
