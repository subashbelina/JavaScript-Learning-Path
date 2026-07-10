/*
  Auth Middleware Chain
  ---------------------
  logger → auth check → route handler (same pattern as Express middleware).
*/

function runChain(req, middlewares, handler) {
  let index = 0;

  function next(err) {
    if (err) return { status: err.status, body: { error: err.message } };

    const fn = middlewares[index++];
    if (fn) return fn(req, next);
    return handler(req);
  }

  return next();
}

function requireAuth(req, next) {
  if (!req.headers.authorization) {
    return next({ status: 401, message: "Unauthorized" });
  }
  req.user = { id: 1, name: "Subash" };
  next();
}

function requireAdmin(req, next) {
  if (req.user.role !== "admin") {
    return next({ status: 403, message: "Admin only" });
  }
  next();
}

const req = { headers: { authorization: "Bearer token" }, user: { id: 1, role: "user" } };

console.log("--- Auth Middleware Chain ---");
const result = runChain(req, [requireAuth, requireAdmin], () => ({
  status: 200,
  body: { message: "Welcome admin" },
}));
console.log("User (not admin) →", result);

req.user.role = "admin";
const result2 = runChain(req, [requireAuth, requireAdmin], () => ({
  status: 200,
  body: { message: "Welcome admin" },
}));
console.log("Admin user       →", result2);
