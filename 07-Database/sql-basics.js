/*
  SQL Basics (CRUD)
  -----------------
  Create, Read, Update, Delete — the four database operations.
*/

let users = [
  { id: 1, name: "Subash", role: "admin" },
  { id: 2, name: "Rai", role: "user" },
];

// Simulated SQL operations on a table
const db = {
  selectAll() {
    return users;
  },

  selectWhere(role) {
    return users.filter((user) => user.role === role);
  },

  insert(name, role) {
    const user = { id: users.length + 1, name, role };
    users.push(user);
    return user;
  },

  update(id, name) {
    const user = users.find((u) => u.id === id);
    if (user) user.name = name;
    return user;
  },

  delete(id) {
    users = users.filter((u) => u.id !== id);
    return true;
  },
};

console.log("--- SQL Basics (CRUD) ---");
console.log("SELECT *              →", db.selectAll());
console.log("SELECT WHERE role=user →", db.selectWhere("user"));
console.log("INSERT                →", db.insert("Anita", "user"));
console.log("UPDATE id=2           →", db.update(2, "Rai Updated"));
console.log("DELETE id=1           →", db.delete(1));
console.log("After changes         →", db.selectAll());

// Real SQL:
// SELECT * FROM users;
// INSERT INTO users (name, role) VALUES ('Anita', 'user');
// UPDATE users SET name = 'Rai' WHERE id = 2;
// DELETE FROM users WHERE id = 1;
