/*
  Error Handling in Node.js
  -------------------------
  Use try/catch with async code. Node errors often have a .code property.
*/

function parseJson(text) {
  return JSON.parse(text);
}

// Sync error
try {
  parseJson("{ invalid");
} catch (err) {
  console.log("--- Error Handling in Node.js ---");
  console.log("Parse error:", err.message);
}

// Node-style error with code
const fileErr = new Error("File not found");
fileErr.code = "ENOENT";
console.log("Error code:", fileErr.code);   // ENOENT

// Async error
async function readSafe() {
  try {
    await Promise.reject(new Error("Network failed"));
  } catch (err) {
    console.log("Async error:", err.message);
  }
}

readSafe();
