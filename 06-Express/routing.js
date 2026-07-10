/*
  Express Routing
  ---------------
  app.get(), app.post(), app.put(), app.delete() handle HTTP methods.
*/

const users = [
  { id: 1, name: "Subash" },
  { id: 2, name: "Rai" },
];

// Mini route table to show how routing works
const routes = {
  "GET /": () => "Hello from Express!",
  "GET /api/users": () => users,
  "POST /api/users": (body) => {
    const user = { id: users.length + 1, name: body.name };
    users.push(user);
    return user;
  },
};

console.log("--- Express Routing ---");
console.log("GET /           →", routes["GET /"]());
console.log("GET /api/users  →", routes["GET /api/users"]());
console.log("POST /api/users →", routes["POST /api/users"]({ name: "Anita" }));
console.log("Users now:", routes["GET /api/users"]());

// Express syntax:
// app.get("/", (req, res) => res.send("Hello from Express!"));
// app.get("/api/users", (req, res) => res.json(users));
// app.post("/api/users", (req, res) => res.status(201).json(newUser));
