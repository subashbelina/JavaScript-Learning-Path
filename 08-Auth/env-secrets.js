/*
  Environment Secrets
  -------------------
  Never hardcode passwords or JWT secrets. Use process.env and .env files.
*/

const JWT_SECRET = process.env.JWT_SECRET || "(not set — use .env file)";
const DB_URL = process.env.DATABASE_URL || "mongodb://localhost:27017/myapp";

console.log("--- Environment Secrets ---");
console.log("JWT_SECRET set?", JWT_SECRET !== "(not set — use .env file)");
console.log("DATABASE_URL:", DB_URL);
console.log("");
console.log(".env file (never commit to GitHub):");
console.log("  JWT_SECRET=my-super-secret-key");
console.log("  DATABASE_URL=mongodb://localhost:27017/myapp");
console.log("");
console.log("Load with: npm install dotenv");
console.log("           require('dotenv').config()");
