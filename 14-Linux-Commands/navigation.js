/*
  Navigation Commands
  -------------------
  Move around the file system — pwd, ls, cd.
*/

const commands = [
  { cmd: "pwd",              desc: "Print working directory (where am I?)" },
  { cmd: "ls",               desc: "List files in current folder" },
  { cmd: "ls -la",           desc: "List all files with details" },
  { cmd: "cd folder-name",   desc: "Change into a folder" },
  { cmd: "cd ..",            desc: "Go up one folder (parent)" },
  { cmd: "cd ~",             desc: "Go to home directory" },
  { cmd: "cd /",             desc: "Go to root (top level)" },
  { cmd: "clear",            desc: "Clear the terminal screen" },
];

console.log("--- Navigation Commands ---");
commands.forEach(({ cmd, desc }) => console.log(`${cmd.padEnd(20)} → ${desc}`));
console.log("");
console.log("You are here:", process.cwd());
console.log("");
console.log("Example session:");
console.log("  cd projects/Js-Learning-Path");
console.log("  ls");
console.log("  cd 01-JavaScript\\ Core\\ fundamentals   (quote paths with spaces)");
