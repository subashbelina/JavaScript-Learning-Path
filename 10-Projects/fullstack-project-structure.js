/*
  Full-Stack Project Structure
  ----------------------------
  React frontend + Express API + database — separate client and server.
  Build in practice/ after finishing folders 03, 06, 07, 08.
*/

const structure = `
practice/todo-fullstack/
├── client/                         ← React frontend (port 5173)
│   ├── src/
│   │   ├── main.jsx
│   │   ├── App.jsx
│   │   ├── components/
│   │   │   ├── TodoList.jsx
│   │   │   ├── TodoForm.jsx
│   │   │   └── LoginForm.jsx
│   │   ├── pages/
│   │   │   ├── TodosPage.jsx
│   │   │   └── LoginPage.jsx
│   │   ├── api/
│   │   │   ├── client.js         ← base fetch with auth header
│   │   │   ├── todos.js          ← getTodos(), createTodo()
│   │   │   └── auth.js           ← login(), register()
│   │   └── hooks/
│   │       └── useAuth.js
│   ├── package.json
│   └── vite.config.js            ← proxy /api → localhost:3000
│
├── server/                         ← Express backend (port 3000)
│   ├── index.js                    ← app.listen(), middleware
│   ├── routes/
│   │   ├── todos.js                ← /api/todos
│   │   └── auth.js                 ← /api/auth/login, /register
│   ├── middleware/
│   │   └── auth.js                 ← verify JWT token
│   ├── models/
│   │   └── todo.js                 ← database queries
│   ├── config/
│   │   └── db.js                   ← database connection
│   └── package.json
│
├── .env                            ← JWT_SECRET, DATABASE_URL
├── .gitignore
└── README.md
`;

const dataFlow = [
  "React (client)  →  fetch POST /api/todos",
  "Express (server) →  auth middleware → save to DB",
  "Database        →  return saved todo",
  "React           →  update UI with new todo",
];

console.log("--- Full-Stack Project Structure ---");
console.log(structure);
console.log("Data flow:");
dataFlow.forEach((step, i) => console.log(`  ${i + 1}. ${step}`));
console.log("");
console.log("Run locally:");
console.log("  Terminal 1:  cd server && npm start     → :3000");
console.log("  Terminal 2:  cd client && npm run dev   → :5173");
