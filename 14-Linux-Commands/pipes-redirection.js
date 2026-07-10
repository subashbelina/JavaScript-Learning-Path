/*
  Pipes & Redirection
  -------------------
  Chain commands and send output to files.
*/

const examples = [
  { cmd: "ls | head -5",              desc: "List files, show first 5" },
  { cmd: 'echo "hello" > file.txt',    desc: "Write text to file (overwrite)" },
  { cmd: 'echo "more" >> file.txt',    desc: "Append text to file" },
  { cmd: "cat file.txt",               desc: "Read what you wrote" },
  { cmd: "npm test 2>&1",             desc: "Capture errors too" },
  { cmd: "history | tail -10",         desc: "Last 10 commands you ran" },
];

console.log("--- Pipes & Redirection ---");
console.log("|     →  pipe output to next command");
console.log(">     →  write output to file (overwrite)");
console.log(">>    →  append output to file");
console.log("2>&1  →  include error messages");
console.log("");
examples.forEach(({ cmd, desc }) => console.log(`${cmd.padEnd(28)} → ${desc}`));
