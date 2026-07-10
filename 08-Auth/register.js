/*
  Register (Sign Up)
  ------------------
  Create a new user account and save hashed password to database.
*/

const crypto = require("crypto");

const users = [];

function hashPassword(password) {
  return crypto.createHash("sha256").update(password).digest("hex");
}

function register({ name, email, password }) {
  if (!name || !email || !password) {
    return { error: "All fields required", status: 400 };
  }

  if (users.find((u) => u.email === email)) {
    return { error: "Email already exists", status: 409 };
  }

  const user = {
    id: users.length + 1,
    name,
    email,
    passwordHash: hashPassword(password),
  };

  users.push(user);
  return { status: 201, user: { id: user.id, name: user.name, email: user.email } };
}

console.log("--- Register (Sign Up) ---");
console.log(register({ name: "Subash", email: "subash@mail.com", password: "pass123" }));
console.log(register({ name: "Rai", email: "rai@mail.com", password: "pass456" }));
console.log("Duplicate email →", register({ name: "X", email: "subash@mail.com", password: "x" }));
