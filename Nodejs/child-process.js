/*
  Child Process
  -------------
  Run shell commands or other programs from Node.js.

  Methods:
    - exec       — run command, buffer output (small output)
    - execFile   — run a file directly
    - spawn      — stream output (long-running processes)
    - fork       — spawn Node.js child with IPC channel

  Note: Read and learn only. Be careful with user input — avoid shell injection.
*/

const childProcessExample = `
const { exec, execFile, spawn } = require("child_process");
const { promisify } = require("util");

const execAsync = promisify(exec);

// --- exec: shell command (callback) ---
exec("ls -la", (err, stdout, stderr) => {
  if (err) return console.error(err);
  console.log(stdout);
});

// --- exec with async/await ---
async function listFiles() {
  const { stdout } = await execAsync("ls -la");
  console.log(stdout);
}

// --- spawn: streaming output (good for long commands) ---
const child = spawn("npm", ["run", "test"], { stdio: "inherit" });

child.on("close", (code) => {
  console.log("Process exited with code", code);
});

// --- execFile: run binary without shell ---
execFile("node", ["--version"], (err, stdout) => {
  console.log(stdout.trim());
});
`;

console.log("--- Child Process ---");
console.log("exec(cmd, callback)       — shell command, buffered");
console.log("spawn(cmd, args, opts)    — streaming, no shell by default");
console.log("execFile(file, args)      — run executable directly");
console.log("fork(modulePath)          — new Node process + IPC");
console.log("");
console.log("Example:\n", childProcessExample);

// Safe demo: run node --version
const { execFile } = require("child_process");
execFile("node", ["--version"], (err, stdout) => {
  if (!err) console.log("Live demo — node version:", stdout.trim());
});
