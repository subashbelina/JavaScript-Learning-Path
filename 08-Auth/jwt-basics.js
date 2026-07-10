/*
  JWT Structure
  -------------
  JSON Web Token = header.payload.signature (three base64 parts).
*/

function createSimpleToken(payload) {
  const header = Buffer.from(JSON.stringify({ alg: "HS256", typ: "JWT" })).toString("base64url");
  const body = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const signature = "demo-signature";
  return `${header}.${body}.${signature}`;
}

function decodePayload(token) {
  const parts = token.split(".");
  return JSON.parse(Buffer.from(parts[1], "base64url").toString());
}

const token = createSimpleToken({ userId: 1, role: "admin", exp: Date.now() + 3600000 });

console.log("--- JWT Structure ---");
console.log("Token:", token);
console.log("");
console.log("Decoded payload:", decodePayload(token));
console.log("");
console.log("Parts: header.payload.signature");
console.log("Client sends: Authorization: Bearer <token>");
