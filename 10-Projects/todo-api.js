/*
  Todo API (CRUD)
  ---------------
  Backend logic for a todo app — uses patterns from folders 06 and 07.
*/

let todos = [
  { id: 1, title: "Learn JavaScript", completed: false },
  { id: 2, title: "Build todo API", completed: false },
];

const TodoAPI = {
  getAll() {
    return todos;
  },

  create(title) {
    const todo = { id: todos.length + 1, title, completed: false };
    todos.push(todo);
    return todo;
  },

  update(id, updates) {
    const todo = todos.find((t) => t.id === Number(id));
    if (!todo) return null;
    Object.assign(todo, updates);
    return todo;
  },

  remove(id) {
    todos = todos.filter((t) => t.id !== Number(id));
    return true;
  },
};

console.log("--- Todo API (CRUD) ---");
console.log("GET all     →", TodoAPI.getAll());
console.log("POST        →", TodoAPI.create("Deploy app"));
console.log("PUT id=1    →", TodoAPI.update(1, { completed: true }));
console.log("DELETE id=2 →", TodoAPI.remove(2));
console.log("Final       →", TodoAPI.getAll());
