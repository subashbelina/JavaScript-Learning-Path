/*
  Build Checklist
  ---------------
  Pick a project type and build in practice/.
*/

const projectTypes = [
  { type: "React only", file: "react-project-structure.js", cmd: "npm create vite@latest my-react-app -- --template react" },
  { type: "Next.js", file: "nextjs-project-structure.js", cmd: "npx create-next-app@latest my-next-app" },
  { type: "Full-Stack Todo", file: "fullstack-project-structure.js", cmd: "client/ + server/ folders" },
  { type: "E-Commerce", file: "ecommerce-project-structure.js", cmd: "Products + cart + Stripe checkout" },
  { type: "SaaS", file: "saas-project-structure.js", cmd: "Dashboard + subscriptions + teams" },
  { type: "Micro SaaS", file: "micro-saas-project-structure.js", cmd: "One feature + free tier + paid plan" },
];

const learningPath = [
  "1. Todo app (fullstack)     → learn CRUD + auth",
  "2. Micro SaaS               → one feature, ship fast",
  "3. E-Commerce               → products, cart, payments",
  "4. Full SaaS                → dashboard, plans, billing",
];

console.log("--- Build Checklist ---");
console.log("Recommended learning path:\n");
learningPath.forEach((step) => console.log(`  ${step}`));
console.log("\nPick a project type:\n");
projectTypes.forEach((p) => {
  console.log(`  ${p.type}`);
  console.log(`    Read: ${p.file}`);
  console.log(`    Build: ${p.cmd}\n`);
});
