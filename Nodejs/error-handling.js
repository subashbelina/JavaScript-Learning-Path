/*
  Error Handling in Node.js
  -------------------------
  Patterns for catching and reporting errors in server and script code.

  Note: Read and learn only. Always handle errors in async code.
*/

const errorExample = `
const fs = require("fs/promises");

// --- Sync: try/catch ---
try {
  JSON.parse("{ invalid json");
} catch (err) {
  console.error("Parse error:", err.message);
}

// --- Async: try/catch with await ---
async function readConfig() {
  try {
    const raw = await fs.readFile("config.json", "utf8");
    return JSON.parse(raw);
  } catch (err) {
    if (err.code === "ENOENT") {
      console.error("Config file not found");
    } else {
      console.error("Unexpected error:", err);
    }
    throw err;
  }
}

// --- Custom error with code ---
class AppError extends Error {
  constructor(message, statusCode = 500) {
    super(message);
    this.name = "AppError";
    this.statusCode = statusCode;
  }
}

// --- Global handlers (server apps) ---
process.on("uncaughtException", (err) => {
  console.error("Uncaught:", err);
  process.exit(1);
});

process.on("unhandledRejection", (reason) => {
  console.error("Unhandled promise rejection:", reason);
});
`;

console.log("--- Error Handling in Node.js ---");
console.log("err.code          — system codes like 'ENOENT', 'EACCES'");
console.log("try/catch         — sync and async/await");
console.log(".catch()          — promise chains");
console.log("Custom Error class — add statusCode, name");
console.log("uncaughtException / unhandledRejection — last resort");
console.log("");
console.log("Example:\n", errorExample);

// Demo: Node error codes
const demoErr = new Error("File missing");
demoErr.code = "ENOENT";
console.log("Demo error code:", demoErr.code);
