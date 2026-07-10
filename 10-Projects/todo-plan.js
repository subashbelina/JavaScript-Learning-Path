/*
  Todo App — Plan First
  ---------------------
  Plan routes and data shape before writing code.
*/

const todoSchema = {
  id: "number",
  title: "string",
  completed: "boolean",
  userId: "number",
};

const apiRoutes = [
  { method: "GET",    path: "/api/todos",      action: "list all todos" },
  { method: "POST",   path: "/api/todos",      action: "create todo" },
  { method: "PUT",    path: "/api/todos/:id",  action: "update todo" },
  { method: "DELETE", path: "/api/todos/:id",  action: "delete todo" },
];

console.log("--- Todo App Plan ---");
console.log("Data shape:", todoSchema);
console.log("");
console.log("API routes:");
apiRoutes.forEach((r) => console.log(`  ${r.method.padEnd(6)} ${r.path} → ${r.action}`));
console.log("");
console.log("Frontend pages:");
console.log("  /login   → sign in");
console.log("  /todos   → list + add todos");
