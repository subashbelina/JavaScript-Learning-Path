/*
  React Project Structure
  -----------------------
  Standard folder layout for a React app (Vite or Create React App).
  Build in practice/ after finishing folder 03.
*/

const structure = `
practice/my-react-app/
├── public/
│   └── favicon.ico
├── src/
│   ├── main.jsx              ← entry point (ReactDOM.createRoot)
│   ├── App.jsx               ← root component
│   ├── index.css             ← global styles
│   ├── components/           ← reusable UI pieces
│   │   ├── Header.jsx
│   │   ├── TodoList.jsx
│   │   └── TodoItem.jsx
│   ├── pages/                ← one component per page (optional)
│   │   ├── Home.jsx
│   │   └── About.jsx
│   ├── hooks/                ← custom hooks (optional)
│   │   └── useTodos.js
│   └── api/                  ← fetch calls to backend
│       └── todos.js
├── package.json
└── vite.config.js
`;

const keyFolders = [
  { folder: "src/components/", purpose: "Reusable UI — buttons, cards, lists" },
  { folder: "src/pages/", purpose: "Full page views (if not using a router)" },
  { folder: "src/hooks/", purpose: "Shared logic — useTodos, useAuth" },
  { folder: "src/api/", purpose: "fetch('/api/todos') — keep API calls in one place" },
];

console.log("--- React Project Structure ---");
console.log(structure);
console.log("Key folders:");
keyFolders.forEach(({ folder, purpose }) => console.log(`  ${folder.padEnd(20)} → ${purpose}`));
console.log("");
console.log("Create with: npm create vite@latest my-react-app -- --template react");
