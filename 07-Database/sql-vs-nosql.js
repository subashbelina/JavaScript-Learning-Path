/*
  SQL vs NoSQL
  ------------
  SQL = structured tables. NoSQL = flexible JSON-like documents.
*/

const sqlUser = { id: 1, name: "Subash", email: "subash@mail.com", role: "admin" };

const mongoUser = {
  _id: "507f1f77bcf86cd799439011",
  name: "Subash",
  email: "subash@mail.com",
  role: "admin",
  tags: ["js", "node"],
};

console.log("--- SQL vs NoSQL ---");
console.log("");
console.log("SQL row (fixed columns):");
console.log(sqlUser);
console.log("");
console.log("MongoDB document (flexible shape):");
console.log(mongoUser);
console.log("");
console.log("SQL       →  SELECT * FROM users WHERE role = 'admin'");
console.log("MongoDB   →  db.users.find({ role: 'admin' })");
