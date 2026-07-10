/*
  Build Frontend
  --------------
  React must be compiled before deploying to production.
*/

const buildSteps = [
  "1. cd client",
  "2. npm run build        → creates dist/ or build/ folder",
  "3. Upload build/ to Vercel or Netlify",
  "4. Set API URL env var: VITE_API_URL=https://api.yourapp.com",
];

console.log("--- Build Frontend ---");
buildSteps.forEach((step) => console.log(step));
console.log("");
console.log("Development:  npm run dev     → localhost:5173");
console.log("Production:   npm run build   → static files for hosting");
