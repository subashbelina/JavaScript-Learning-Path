/*
  Build Checklist
  ---------------
  Pick a project type and build in practice/.
*/

const projectTypes = [
  { type: "React only", file: "react-project-structure.js", cmd: "npm create vite@latest my-react-app -- --template react" },
  { type: "Next.js", file: "nextjs-project-structure.js", cmd: "npx create-next-app@latest my-next-app" },
  { type: "Full-Stack", file: "fullstack-project-structure.js", cmd: "Separate client/ + server/ folders" },
];

const fullStackSteps = [
  "[ ] 1. Read fullstack-project-structure.js",
  "[ ] 2. Create practice/todo-fullstack/server — npm init, npm install express",
  "[ ] 3. Build GET and POST /api/todos",
  "[ ] 4. Create practice/todo-fullstack/client — Vite + React",
  "[ ] 5. Fetch todos and display in a list",
  "[ ] 6. Add create, complete, delete",
  "[ ] 7. (Optional) Add login with JWT",
  "[ ] 8. (Optional) Connect MongoDB",
];

console.log("--- Build Checklist ---");
console.log("Pick a project type:\n");
projectTypes.forEach((p) => {
  console.log(`  ${p.type}`);
  console.log(`    Read: ${p.file}`);
  console.log(`    Start: ${p.cmd}\n`);
});
console.log("Full-Stack todo app steps:");
fullStackSteps.forEach((step) => console.log(step));
