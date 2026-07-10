/*
  Processes
  ---------
  See and control running programs.
*/

const commands = [
  { cmd: "node file.js",         desc: "Run a JavaScript file" },
  { cmd: "npm start",            desc: "Run script from package.json" },
  { cmd: "npm run dev",          desc: "Run dev script" },
  { cmd: "ps aux | grep node",   desc: "Find running Node processes" },
  { cmd: "kill 1234",            desc: "Stop process by ID (PID)" },
  { cmd: "Ctrl + C",             desc: "Stop current running command" },
  { cmd: "Ctrl + Z",             desc: "Pause current command" },
];

console.log("--- Processes ---");
commands.forEach(({ cmd, desc }) => console.log(`${cmd.padEnd(24)} → ${desc}`));
console.log("");
console.log("Stuck server?  Ctrl+C  or  kill <PID>");
console.log("");
console.log("Run a file from this repo:");
console.log('  node "01-JavaScript Core fundamentals/Data-types/string.js"');
