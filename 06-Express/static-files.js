/*
  Static Files
  ------------
  Serve HTML, CSS, images from a public folder.
  express.static("public") maps files to URLs.
*/

const publicFiles = {
  "/": "index.html",
  "/style.css": "style.css",
  "/logo.png": "logo.png",
};

function serveStatic(url) {
  return publicFiles[url] || null;
}

console.log("--- Static Files ---");
console.log("GET /          →", serveStatic("/"));
console.log("GET /style.css →", serveStatic("/style.css"));
console.log("GET /missing   →", serveStatic("/missing")); // null → 404

// Express syntax:
// app.use(express.static("public"));
// public/index.html  →  http://localhost:3000/
// public/style.css   →  http://localhost:3000/style.css
