/*
  Query Parameters
  ----------------
  Filters and options in the URL: /api/users?role=admin&page=2
  Access with req.query
*/

const users = [
  { id: 1, name: "Subash", role: "admin" },
  { id: 2, name: "Rai", role: "user" },
  { id: 3, name: "Anita", role: "user" },
];

function filterUsers(query) {
  let result = [...users];

  if (query.role) {
    result = result.filter((user) => user.role === query.role);
  }

  const page = Number(query.page) || 1;
  const limit = Number(query.limit) || 10;
  const start = (page - 1) * limit;

  return result.slice(start, start + limit);
}

console.log("--- Query Parameters ---");
console.log("?role=admin     →", filterUsers({ role: "admin" }));
console.log("?role=user      →", filterUsers({ role: "user" }));
console.log("?page=1&limit=2 →", filterUsers({ page: "1", limit: "2" }));

// Express syntax:
// app.get("/api/users", (req, res) => {
//   const { role, page, limit } = req.query;
//   res.json(filterUsers({ role, page, limit }));
// });
