/*
  JSON Request Body
  -----------------
  POST and PUT requests send data in the body.
  Use express.json() middleware to parse JSON automatically.
*/

const users = [{ id: 1, name: "Subash" }];

function addUser(body) {
  if (!body.name) {
    return { error: "name is required", status: 400 };
  }

  const user = { id: users.length + 1, name: body.name };
  users.push(user);
  return { data: user, status: 201 };
}

console.log("--- JSON Request Body ---");
console.log("Before:", users);
console.log("POST { name: 'Rai' }   →", addUser({ name: "Rai" }));
console.log("POST { }               →", addUser({}));
console.log("After:", users);

// Express syntax:
// app.use(express.json());  // parse JSON body
// app.post("/api/users", (req, res) => {
//   const result = addUser(req.body);
//   res.status(result.status).json(result.data || result);
// });
