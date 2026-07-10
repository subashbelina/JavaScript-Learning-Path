/*
  Find Queries
  ------------
  Filter, sort, and limit results — same idea in SQL and MongoDB.
*/

const users = [
  { id: 1, name: "Subash", role: "admin", age: 25 },
  { id: 2, name: "Rai", role: "user", age: 22 },
  { id: 3, name: "Anita", role: "user", age: 28 },
  { id: 4, name: "Bob", role: "admin", age: 30 },
];

function findUsers({ role, sortBy, limit }) {
  let result = role ? users.filter((u) => u.role === role) : [...users];
  if (sortBy) result.sort((a, b) => a[sortBy] - b[sortBy]);
  if (limit) result = result.slice(0, limit);
  return result;
}

console.log("--- Find Queries ---");
console.log("role=admin       →", findUsers({ role: "admin" }));
console.log("role=user, limit 2 →", findUsers({ role: "user", limit: 2 }));
console.log("sort by age      →", findUsers({ sortBy: "age" }));

// MongoDB:  db.users.find({ role: 'user' }).sort({ age: 1 }).limit(2)
// SQL:      SELECT * FROM users WHERE role = 'user' ORDER BY age LIMIT 2
