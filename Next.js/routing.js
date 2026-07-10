/*
  File-Based Routing
  ------------------
  Each folder in app/ becomes a URL route.
  page.js inside a folder = the page at that URL.
*/

const routingExample = `
app/
├── page.js              →  /
├── about/
│   └── page.js          →  /about
├── contact/
│   └── page.js          →  /contact
├── products/
│   ├── page.js          →  /products
│   └── [id]/
│       └── page.js      →  /products/1, /products/2
└── blog/
    └── [...slug]/
        └── page.js      →  /blog/a, /blog/a/b/c
`;

console.log("--- File-Based Routing ---");
console.log("Folder name  = URL path");
console.log("page.js      = page component for that route");
console.log("[id]         = dynamic segment (one part)");
console.log("[...slug]    = catch-all (many parts)");
console.log("");
console.log("Example:\n", routingExample);
