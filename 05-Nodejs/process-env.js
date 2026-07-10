/*
  Process & Environment
  ---------------------
  process gives access to args, env vars, and runtime info.
*/

const port = process.env.PORT || 3000;
const args = process.argv.slice(2);

console.log("--- Process & Environment ---");
console.log("process.cwd():", process.cwd());
console.log("process.platform:", process.platform);
console.log("process.version:", process.version);
console.log("process.pid:", process.pid);
console.log("PORT (or default):", port);
console.log("CLI args:", args.length ? args : "(none — try: node process-env.js --dev)");
