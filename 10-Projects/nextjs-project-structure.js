/*
  Next.js Project Structure
  -------------------------
  Standard folder layout for a Next.js app (App Router).
  Build in practice/ after finishing folder 04.
*/

const structure = `
practice/my-next-app/
├── app/                      ← routes (file = URL)
│   ├── layout.js             ← shared layout (header, footer)
│   ├── page.js               ← home page (/)
│   ├── globals.css
│   ├── todos/
│   │   └── page.js           ← /todos
│   ├── login/
│   │   └── page.js           ← /login
│   └── api/                  ← backend API routes
│       └── todos/
│           └── route.js        ← GET/POST /api/todos
├── components/               ← React components (outside app/)
│   ├── TodoList.jsx
│   └── Navbar.jsx
├── lib/                      ← helpers, db connection
│   └── db.js
├── public/                   ← images, favicon
│   └── logo.png
├── next.config.js
├── package.json
└── .env.local                ← secrets (never commit)
`;

const keyFolders = [
  { folder: "app/", purpose: "Every folder = route. page.js = UI" },
  { folder: "app/api/", purpose: "Backend routes — no separate Express server needed" },
  { folder: "components/", purpose: "Shared React components" },
  { folder: "lib/", purpose: "Database, auth helpers, utilities" },
  { folder: "public/", purpose: "Static files served at /" },
];

console.log("--- Next.js Project Structure ---");
console.log(structure);
console.log("Key folders:");
keyFolders.forEach(({ folder, purpose }) => console.log(`  ${folder.padEnd(20)} → ${purpose}`));
console.log("");
console.log("Create with: npx create-next-app@latest my-next-app");
