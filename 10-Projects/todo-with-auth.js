/*
  Todo App + Auth
  ---------------
  Each user only sees their own todos (from folder 08).
*/

const users = [
  { id: 1, name: "Subash", token: "token-subash" },
  { id: 2, name: "Rai", token: "token-rai" },
];

let todos = [
  { id: 1, title: "Subash task", completed: false, userId: 1 },
  { id: 2, title: "Rai task", completed: false, userId: 2 },
];

function getUserFromToken(token) {
  return users.find((u) => u.token === token) || null;
}

function getTodosForUser(userId) {
  return todos.filter((t) => t.userId === userId);
}

function createTodo(userId, title) {
  const todo = { id: todos.length + 1, title, completed: false, userId };
  todos.push(todo);
  return todo;
}

console.log("--- Todo App + Auth ---");
console.log("Subash todos →", getTodosForUser(1));
console.log("Rai todos    →", getTodosForUser(2));
console.log("Subash adds  →", createTodo(1, "New task"));
console.log("Subash todos →", getTodosForUser(1));
