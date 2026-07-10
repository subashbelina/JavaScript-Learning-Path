/*
  Crypto Basics
  -------------
  Hashing and secure random values (built-in crypto module).
  For passwords in real apps, use bcrypt or argon2 packages.
*/

const crypto = require("crypto");

const hash = crypto.createHash("sha256").update("hello").digest("hex");
const randomHex = crypto.randomBytes(8).toString("hex");
const uuid = crypto.randomUUID();

console.log("--- Crypto Module ---");
console.log("sha256('hello'):", hash);
console.log("randomBytes(8):", randomHex);
console.log("randomUUID():", uuid);
