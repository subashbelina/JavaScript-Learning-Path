/*
  Sessions vs JWT
  ---------------
  Two ways to keep users logged in after they sign in.
*/

console.log("--- Sessions vs JWT ---");
console.log("");
console.log("Sessions:");
console.log("  - Server stores session ID in memory/database");
console.log("  - Client gets a cookie with session ID");
console.log("  - Good for: traditional web apps, easy logout");
console.log("");
console.log("JWT (JSON Web Token):");
console.log("  - Server sends signed token to client");
console.log("  - Client stores token (localStorage or cookie)");
console.log("  - Client sends token in Authorization header");
console.log("  - Good for: APIs, mobile apps, SPAs (React)");
console.log("");
console.log("This learning path uses JWT-style tokens (common with React + Express)");
