/*
  Dev Commands (Node & npm)
  -------------------------
  Commands you will use every day as a JavaScript developer.
*/

const commands = [
  { cmd: "node file.js",                          desc: "Run a JS file" },
  { cmd: "node --version",                         desc: "Check Node version" },
  { cmd: "npm init -y",                           desc: "Create package.json" },
  { cmd: "npm install express",                    desc: "Install a package" },
  { cmd: "npm install",                            desc: "Install all dependencies" },
  { cmd: "npm run dev",                            desc: "Start dev server" },
  { cmd: "npm test",                               desc: "Run tests" },
  { cmd: "npx create-next-app@latest my-app",      desc: "Scaffold Next.js app" },
  { cmd: "npx create vite@latest my-app -- --template react", desc: "Scaffold React app" },
];

console.log("--- Dev Commands (Node & npm) ---");
commands.forEach(({ cmd, desc }) => console.log(`${cmd.padEnd(48)} → ${desc}`));
console.log("Run files from this learning path:");
console.log('  node 05-Nodejs/intro.js');
console.log('  node 10-Projects/todo-api.js');
