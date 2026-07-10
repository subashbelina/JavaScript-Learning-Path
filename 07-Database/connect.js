/*
  Connect to Database
  -------------------
  Node apps connect with a connection string (URL with credentials).
*/

const config = {
  mongodb: "mongodb://localhost:27017/myapp",
  postgres: "postgresql://user:password@localhost:5432/myapp",
};

console.log("--- Connect to Database ---");
console.log("MongoDB URL :", config.mongodb);
console.log("Postgres URL:", config.postgres);
console.log("");
console.log("Steps:");
console.log("  1. Install driver:  npm install mongodb  (or pg for PostgreSQL)");
console.log("  2. Connect once when server starts");
console.log("  3. Reuse connection for all requests");
console.log("");
console.log("// const { MongoClient } = require('mongodb');");
console.log("// const client = await MongoClient.connect(process.env.MONGO_URL);");
console.log("// const db = client.db('myapp');");
