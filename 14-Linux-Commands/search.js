/*
  Search Commands
  ---------------
  Find text inside files and locate files by name.
*/

const commands = [
  { cmd: 'grep "todo" file.js',           desc: "Find text in one file" },
  { cmd: 'grep -r "express" ./',          desc: "Search all files in folder" },
  { cmd: 'grep -n "console" app.js',      desc: "Show line numbers" },
  { cmd: 'grep -i "error" log.txt',       desc: "Case-insensitive search" },
  { cmd: 'find . -name "*.js"',           desc: "Find files by name" },
  { cmd: 'find . -name "intro.js"',       desc: "Find a specific file" },
];

console.log("--- Search Commands ---");
commands.forEach(({ cmd, desc }) => console.log(`${cmd.padEnd(32)} → ${desc}`));
console.log("");
console.log("Try on this repo:");
console.log('  grep -r "Express" 06-Express/');
console.log('  find . -name "intro.js"');
