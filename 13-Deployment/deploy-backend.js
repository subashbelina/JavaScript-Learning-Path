/*
  Deploy Backend (Railway / Render)
  ---------------------------------
  Host your Express API on a cloud server.
*/

const steps = [
  "1. Push server/ code to GitHub",
  "2. Go to railway.app or render.com",
  "3. New Project → Deploy from GitHub",
  "4. Set root directory to server/",
  "5. Add env vars: DATABASE_URL, JWT_SECRET, PORT",
  "6. Deploy → get URL: https://your-api.railway.app",
  "7. Update frontend VITE_API_URL to point here",
];

console.log("--- Deploy Backend ---");
steps.forEach((step) => console.log(step));
console.log("");
console.log("Railway / Render  →  Express, Node.js APIs");
console.log("Start command:      node index.js  or  npm start");
