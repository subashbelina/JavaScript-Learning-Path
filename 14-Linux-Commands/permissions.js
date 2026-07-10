/*
  Permissions
  -----------
  Control who can read, write, and run files.
*/

const permissions = [
  { symbol: "r", meaning: "read    — view file contents" },
  { symbol: "w", meaning: "write   — edit file" },
  { symbol: "x", meaning: "execute — run as program/script" },
];

const commands = [
  { cmd: "ls -la",              desc: "See permissions (e.g. -rw-r--r--)" },
  { cmd: "chmod +x script.sh",  desc: "Make file executable" },
  { cmd: "chmod 755 app.js",     desc: "Set numeric permissions" },
  { cmd: "./script.sh",          desc: "Run executable in current folder" },
];

console.log("--- Permissions ---");
console.log("r = read   w = write   x = execute");
console.log("");
permissions.forEach(({ symbol, meaning }) => console.log(`  ${symbol}  →  ${meaning}`));
console.log("");
commands.forEach(({ cmd, desc }) => console.log(`${cmd.padEnd(22)} → ${desc}`));
console.log("");
console.log("Common: chmod +x deploy.sh  then  ./deploy.sh");
