/*
  Password Hashing
  ----------------
  Never store plain-text passwords. Hash them before saving to database.
*/

const crypto = require("crypto");

function hashPassword(password) {
  return crypto.createHash("sha256").update(password).digest("hex");
}

const plainPassword = "mySecret123";
const hashed = hashPassword(plainPassword);

console.log("--- Password Hashing ---");
console.log("Plain (NEVER store):", plainPassword);
console.log("Hashed (store this):", hashed);
console.log("");
console.log("Login check:");
console.log("  input hash === stored hash ?", hashPassword("mySecret123") === hashed);
console.log("  wrong password match?      ?", hashPassword("wrong") === hashed);
console.log("");
console.log("Production: use bcrypt or argon2 (not plain sha256)");
