/*
  Route Parameters
  ----------------
  Use :id in the path to capture dynamic segments.
  Access with req.params.id
*/

const users = [
  { id: 1, name: "Subash" },
  { id: 2, name: "Rai" },
];

function getUserById(id) {
  return users.find((user) => user.id === Number(id));
}

console.log("--- Route Parameters ---");
console.log("GET /api/users/1 →", getUserById(1));
console.log("GET /api/users/2 →", getUserById(2));
console.log("GET /api/users/99 →", getUserById(99)); // undefined → 404 in real app

// Express syntax:
// app.get("/api/users/:id", (req, res) => {
//   const user = users.find((u) => u.id === Number(req.params.id));
//   if (!user) return res.status(404).json({ error: "Not found" });
//   res.json(user);
// });
