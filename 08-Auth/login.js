/*
  Login (Sign In)
  ---------------
  Check email + password against database. Return a token on success.
*/

const crypto = require("crypto");

const users = [
  { id: 1, email: "subash@mail.com", passwordHash: crypto.createHash("sha256").update("pass123").digest("hex") },
];

function hashPassword(password) {
  return crypto.createHash("sha256").update(password).digest("hex");
}

function createToken(userId) {
  const payload = JSON.stringify({ userId, iat: Date.now() });
  return Buffer.from(payload).toString("base64");
}

function login({ email, password }) {
  const user = users.find((u) => u.email === email);

  if (!user || user.passwordHash !== hashPassword(password)) {
    return { error: "Invalid email or password", status: 401 };
  }

  return {
    status: 200,
    token: createToken(user.id),
    user: { id: user.id, email: user.email },
  };
}

console.log("--- Login (Sign In) ---");
console.log("Correct password →", login({ email: "subash@mail.com", password: "pass123" }));
console.log("Wrong password   →", login({ email: "subash@mail.com", password: "wrong" }));
