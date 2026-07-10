/*
  Daily Git Workflow
  ------------------
  A simple routine for solo developers.
*/

const workflow = [
  "Morning:  git pull origin main",
  "Work:     edit code, test locally",
  "Save:     git add .",
  "Save:     git commit -m 'Describe what you changed'",
  "Share:    git push origin main",
];

console.log("--- Daily Git Workflow ---");
workflow.forEach((step, i) => console.log(`${i + 1}. ${step}`));
console.log("");
console.log("Good commit messages:");
console.log("  ✓ 'Add todo delete endpoint'");
console.log("  ✓ 'Fix login token expiry'");
console.log("  ✗ 'update'");
console.log("  ✗ 'fix stuff'");
