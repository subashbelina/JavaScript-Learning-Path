/*
  Crypto Basics
  -------------
  Hashing, random bytes, and basic cryptography (built-in crypto module).

  Note: Read and learn only. For passwords, use bcrypt/argon2 packages in real apps.
*/

const crypto = require("crypto");

const hash = crypto.createHash("sha256").update("hello").digest("hex");
const randomBytes = crypto.randomBytes(16).toString("hex");
const uuid = crypto.randomUUID();

console.log("--- Crypto Module ---");
console.log("createHash('sha256').update(data).digest('hex')");
console.log("randomBytes(n).toString('hex')  — secure random");
console.log("randomUUID()                    — UUID v4");
console.log("");
console.log("sha256('hello') →", hash);
console.log("randomBytes(16) →", randomBytes);
console.log("randomUUID()    →", uuid);

const cryptoExample = `
const crypto = require("crypto");

// Hash a string (one-way — cannot reverse)
const hash = crypto
  .createHash("sha256")
  .update("my-secret-data")
  .digest("hex");

// Compare hashes safely (timing-safe)
const a = Buffer.from(hash, "hex");
const b = Buffer.from(otherHash, "hex");
crypto.timingSafeEqual(a, b);

// HMAC — hash with a secret key
const hmac = crypto
  .createHmac("sha256", "my-key")
  .update("message")
  .digest("hex");
`;

console.log("");
console.log("Example:\n", cryptoExample);
