/*
  Daily Terminal Workflow
  -----------------------
  Commands you use every day as a developer.
*/

const workflow = [
  "1. cd ~/projects/my-app          → open project",
  "2. git pull origin main          → get latest code",
  "3. npm install                   → install dependencies",
  "4. npm run dev                   → start dev server",
  "5. node server.js                 → or run backend",
  "6. git status                    → see what changed",
  "7. git add . && git commit -m '' → save changes",
  "8. git push origin main          → push to GitHub",
];

console.log("--- Daily Terminal Workflow ---");
workflow.forEach((step) => console.log(step));
console.log("");
console.log("Open two terminals for full-stack:");
console.log("  Terminal 1:  cd server && npm start");
console.log("  Terminal 2:  cd client && npm run dev");
