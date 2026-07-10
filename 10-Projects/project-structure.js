/*
  Project Structure
  -----------------
  How to organize a full-stack todo app in practice/.
*/

const structure = `
practice/todo-app/
├── client/                 ← React frontend
│   ├── src/
│   │   ├── App.jsx
│   │   ├── components/
│   │   │   └── TodoList.jsx
│   │   └── api/
│   │       └── todos.js    ← fetch("/api/todos")
│   └── package.json
│
├── server/                 ← Express backend
│   ├── index.js            ← app.listen()
│   ├── routes/
│   │   └── todos.js
│   ├── middleware/
│   │   └── auth.js
│   └── package.json
│
└── .env                    ← JWT_SECRET, DATABASE_URL
`;

console.log("--- Project Structure ---");
console.log(structure);
