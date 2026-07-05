/*
  Project Structure (App Router)
  ------------------------------
  Next.js 13+ uses the app/ folder for routing.
*/

const structureExample = `
my-next-app/
├── app/
│   ├── layout.js       ← root layout (wraps all pages)
│   ├── page.js         ← home page (/)
│   ├── about/
│   │   └── page.js     ← /about
│   ├── blog/
│   │   ├── page.js     ← /blog
│   │   └── [slug]/
│   │       └── page.js ← /blog/my-post
│   └── api/
│       └── users/
│           └── route.js ← API: /api/users
├── public/             ← static files (images, favicon)
├── next.config.js      ← Next.js settings
└── package.json
`;

console.log("--- Project Structure ---");
console.log("app/ folder = routes and pages");
console.log("page.js     = UI for a route");
console.log("layout.js   = shared wrapper");
console.log("route.js    = API endpoint");
console.log("public/     = static assets");
console.log("");
console.log("Example:\n", structureExample);
