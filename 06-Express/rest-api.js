/*
  REST API (CRUD)
  ---------------
  Create, Read, Update, Delete — the standard API pattern.
*/

let users = [
  { id: 1, name: "Subash" },
  { id: 2, name: "Rai" },
];

const api = {
  getAll() {
    return users;
  },

  getById(id) {
    return users.find((user) => user.id === Number(id));
  },

  create(name) {
    const user = { id: users.length + 1, name };
    users.push(user);
    return user;
  },

  update(id, name) {
    const user = users.find((u) => u.id === Number(id));
    if (!user) return null;
    user.name = name;
    return user;
  },

  remove(id) {
    const index = users.findIndex((u) => u.id === Number(id));
    if (index === -1) return false;
    users.splice(index, 1);
    return true;
  },
};

console.log("--- REST API (CRUD) ---");
console.log("GET    /api/users     →", api.getAll());
console.log("GET    /api/users/1   →", api.getById(1));
console.log("POST   /api/users     →", api.create("Anita"));
console.log("PUT    /api/users/2   →", api.update(2, "Rai Updated"));
console.log("DELETE /api/users/1   →", api.remove(1));
console.log("Final list          →", api.getAll());

// Express routes:
// GET    /api/users      → res.json(api.getAll())
// GET    /api/users/:id  → res.json(api.getById(req.params.id))
// POST   /api/users      → res.status(201).json(api.create(req.body.name))
// PUT    /api/users/:id  → res.json(api.update(req.params.id, req.body.name))
// DELETE /api/users/:id  → res.sendStatus(204)
