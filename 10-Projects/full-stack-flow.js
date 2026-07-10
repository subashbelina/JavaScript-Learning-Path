/*
  Full-Stack Flow
  ---------------
  How a todo app request travels through the system.
*/

const flow = [
  "1. User clicks 'Add Todo' in React (folder 03)",
  "2. React sends POST /api/todos with { title: 'Buy milk' }",
  "3. Express receives request (folder 06)",
  "4. Auth middleware checks JWT token (folder 08)",
  "5. Express saves todo to database (folder 07)",
  "6. Express returns { id: 3, title: 'Buy milk', completed: false }",
  "7. React updates state and re-renders the list",
];

console.log("--- Full-Stack Flow ---");
flow.forEach((step) => console.log(step));
console.log("");
console.log("Browser  →  Express API  →  Database");
console.log("   ↑                           ↓");
console.log("   └──────── JSON response ──────┘");
