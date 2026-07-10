/*
  Common Mistakes
  ---------------
  Terminal errors beginners hit and how to fix them.
*/

const mistakes = [
  { error: "command not found: node", fix: "Install Node.js from nodejs.org" },
  { error: "No such file or directory", fix: "Check path with pwd and ls" },
  { error: "Permission denied", fix: "Try chmod +x or use sudo (carefully)" },
  { error: "Port 3000 already in use", fix: "Kill old process: lsof -i :3000 then kill PID" },
  { error: "rm -rf deleted wrong folder", fix: "Always pwd before rm. No undo!" },
  { error: "Spaces in path break cd", fix: 'Use quotes: cd "JavaScript Core fundamentals"' },
];

console.log("--- Common Mistakes ---");
mistakes.forEach(({ error, fix }) => {
  console.log(`✗ ${error}`);
  console.log(`  → ${fix}\n`);
});
