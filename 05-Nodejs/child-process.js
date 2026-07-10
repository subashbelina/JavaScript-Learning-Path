/*
  Child Process
  -------------
  Run shell commands or other programs from Node.js.
  Be careful with user input — avoid shell injection.
*/

const { execFile } = require("child_process");

console.log("--- Child Process ---");

execFile("node", ["--version"], (err, stdout) => {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log("node version:", stdout.trim());
});
