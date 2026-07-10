/*
  Process & Environment
  ---------------------
  Access command-line args, environment variables, and process info.

  Note: Read and learn only. Never commit secrets — use .env files locally.
*/

console.log("--- Process & Environment ---");
console.log("process.argv        →", process.argv.slice(0, 3), "… (node, script, args…)");
console.log("process.cwd()       →", process.cwd());
console.log("process.platform    →", process.platform);
console.log("process.version     →", process.version);
console.log("process.env.NODE_ENV →", process.env.NODE_ENV ?? "(not set)");
console.log("process.pid         →", process.pid);

const processExample = `
// Run: NODE_ENV=production node app.js --port 3000

// Command-line arguments (after node and script path)
const args = process.argv.slice(2);
// ["--port", "3000"]

// Environment variables
const port = process.env.PORT || 3000;
const dbUrl = process.env.DATABASE_URL;

if (process.env.NODE_ENV === "production") {
  console.log("Running in production mode");
}

// Graceful shutdown
process.on("SIGINT", () => {
  console.log("Shutting down…");
  process.exit(0);
});

// Exit with status code (0 = success, 1 = error)
process.exit(1);
`;

console.log("");
console.log("Example:\n", processExample);
