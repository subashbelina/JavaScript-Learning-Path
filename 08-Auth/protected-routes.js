/*
  Protected Routes
  ----------------
  Middleware checks token before allowing access to private routes.
*/

function authMiddleware(req) {
  const token = req.headers.authorization?.replace("Bearer ", "");

  if (!token) {
    return { allowed: false, status: 401, error: "No token provided" };
  }

  try {
    const payload = JSON.parse(Buffer.from(token.split(".")[1], "base64url").toString());
    return { allowed: true, user: payload };
  } catch {
    return { allowed: false, status: 403, error: "Invalid token" };
  }
}

const validToken = Buffer.from(JSON.stringify({ userId: 1, role: "admin" })).toString("base64url");
const fakeToken = "invalid.token.here";

console.log("--- Protected Routes ---");

const req1 = { headers: {} };
const req2 = { headers: { authorization: `Bearer header.${validToken}.sig` } };
const req3 = { headers: { authorization: `Bearer ${fakeToken}` } };

console.log("No token    →", authMiddleware(req1));
console.log("Valid token →", authMiddleware(req2));
console.log("Bad token   →", authMiddleware(req3));

// Express:
// app.get("/api/profile", authMiddleware, (req, res) => res.json(req.user));
