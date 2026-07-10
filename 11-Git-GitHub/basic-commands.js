/*
  Basic Git Commands
  ------------------
  init, status, add, commit — the daily workflow.
*/

const commands = [
  { cmd: "git init",           desc: "Start a new repo in current folder" },
  { cmd: "git status",         desc: "See changed and staged files" },
  { cmd: "git add file.js",    desc: "Stage one file for commit" },
  { cmd: "git add .",          desc: "Stage all changed files" },
  { cmd: 'git commit -m "msg"', desc: "Save a snapshot with a message" },
  { cmd: "git log --oneline",  desc: "View commit history" },
];

console.log("--- Basic Git Commands ---");
commands.forEach(({ cmd, desc }) => console.log(`${cmd.padEnd(22)} → ${desc}`));
console.log("");
console.log("Typical flow:");
console.log("  edit code → git add . → git commit -m 'Add todo API'");
