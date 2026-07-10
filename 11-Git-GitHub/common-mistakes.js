/*
  Common Git Mistakes
  -------------------
  Problems new developers hit and how to avoid them.
*/

const mistakes = [
  { mistake: "Committed .env with secrets", fix: "Add .env to .gitignore before first commit" },
  { mistake: "Committed node_modules", fix: "Add node_modules/ to .gitignore" },
  { mistake: "Vague commit message 'update'", fix: "Write what changed: 'Add user login route'" },
  { mistake: "Pushed to wrong branch", fix: "Check git branch before git push" },
  { mistake: "Merge conflicts", fix: "git pull first, resolve conflicts, then push" },
];

console.log("--- Common Git Mistakes ---");
mistakes.forEach(({ mistake, fix }) => {
  console.log(`✗ ${mistake}`);
  console.log(`  → ${fix}`);
  console.log("");
});
