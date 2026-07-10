/*
  .gitignore
  ----------
  Tell Git which files NOT to track.
*/

const gitignore = `
node_modules/
.env
.DS_Store
dist/
build/
*.log
practice/
`;

console.log("--- .gitignore ---");
console.log("Never commit these:");
console.log(gitignore);
console.log("Why:");
console.log("  node_modules/  →  huge, reinstall with npm install");
console.log("  .env           →  secrets (passwords, API keys)");
console.log("  practice/      →  your local experiments");
