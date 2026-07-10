/*
  Branches
  --------
  Work on features separately without breaking main code.
*/

const branches = {
  main: ["Initial commit", "Add todo API"],
  "feature/auth": ["Add login route", "Add JWT middleware"],
};

console.log("--- Branches ---");
Object.entries(branches).forEach(([branch, commits]) => {
  console.log(`${branch}:`);
  commits.forEach((c) => console.log(`  - ${c}`));
});

console.log("");
console.log("git branch feature/auth     → create branch");
console.log("git checkout feature/auth   → switch to branch");
console.log("git checkout -b fix/bug     → create and switch");
console.log("git merge feature/auth      → merge into current branch");
