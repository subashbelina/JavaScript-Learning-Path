/*
  Error Handling
  --------------
  Catch errors with a middleware that has 4 arguments: (err, req, res, next)
*/

function riskyHandler(shouldFail) {
  if (shouldFail) {
    const err = new Error("Database connection failed");
    err.status = 500;
    throw err;
  }
  return { ok: true, message: "Success" };
}

function errorHandler(err, res) {
  const status = err.status || 500;
  res.status = status;
  res.body = { error: err.message };
}

console.log("--- Error Handling ---");

try {
  console.log("Normal request →", riskyHandler(false));
} catch (err) {
  const res = {};
  errorHandler(err, res);
  console.log("Should not run");
}

try {
  riskyHandler(true);
} catch (err) {
  const res = {};
  errorHandler(err, res);
  console.log("Failed request → status:", res.status, res.body);
}

// Express syntax:
// app.use((err, req, res, next) => {
//   res.status(err.status || 500).json({ error: err.message });
// });
