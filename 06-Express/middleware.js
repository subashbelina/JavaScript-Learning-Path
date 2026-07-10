/*
  Middleware
  ----------
  Functions that run before your route handler.
  They can read req, modify res, or call next() to continue.
*/

function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}

function checkAuth(req, res, next) {
  if (!req.headers.authorization) {
    res.status = 401;
    res.body = { error: "Unauthorized" };
    return;
  }
  next();
}

function runRoute(req, res, middlewares, handler) {
  let index = 0;

  function next() {
    const fn = middlewares[index++];
    if (fn) return fn(req, res, next);
    handler(req, res);
  }

  next();
}

const req = { method: "GET", url: "/api/users", headers: {} };
const res = {};

console.log("--- Middleware ---");

runRoute(req, res, [logger, checkAuth], () => {
  res.status = 200;
  res.body = [{ id: 1, name: "Subash" }];
});

console.log("No auth header → status:", res.status, res.body);

const req2 = { method: "GET", url: "/api/users", headers: { authorization: "Bearer token" } };
const res2 = {};

runRoute(req2, res2, [logger, checkAuth], () => {
  res2.status = 200;
  res2.body = [{ id: 1, name: "Subash" }];
});

console.log("With auth       → status:", res2.status, res2.body);

// Express syntax:
// app.use(logger);
// app.get("/api/users", checkAuth, (req, res) => res.json(users));
