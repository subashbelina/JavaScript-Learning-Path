/*
  View File Contents
  ------------------
  Read files without opening an editor.
*/

const commands = [
  { cmd: "cat file.js",         desc: "Print entire file to terminal" },
  { cmd: "head file.js",        desc: "First 10 lines" },
  { cmd: "head -n 5 file.js",   desc: "First 5 lines" },
  { cmd: "tail file.js",        desc: "Last 10 lines" },
  { cmd: "tail -f log.txt",     desc: "Watch file live (server logs)" },
  { cmd: "less file.js",        desc: "Scroll through file (q to quit)" },
  { cmd: "wc -l file.js",       desc: "Count lines in file" },
];

console.log("--- View File Contents ---");
commands.forEach(({ cmd, desc }) => console.log(`${cmd.padEnd(22)} → ${desc}`));
console.log("");
console.log("Try on this repo:");
console.log('  head -n 8 README.md');
console.log('  cat 05-Nodejs/intro.js');
