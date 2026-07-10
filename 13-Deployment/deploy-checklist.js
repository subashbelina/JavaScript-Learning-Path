/*
  Deploy Checklist
  ----------------
  Final checks before going live.
*/

const checklist = [
  "[ ] Code pushed to GitHub",
  "[ ] .env secrets set on hosting (not in code)",
  "[ ] DATABASE_URL points to cloud database",
  "[ ] Frontend build succeeds (npm run build)",
  "[ ] API health check works (GET /api/todos)",
  "[ ] CORS configured if frontend and API on different domains",
  "[ ] Test login flow on production URL",
  "[ ] Remove console.log with sensitive data",
];

console.log("--- Deploy Checklist ---");
checklist.forEach((item) => console.log(item));
console.log("");
console.log("You did it! Your app is live on the internet.");
