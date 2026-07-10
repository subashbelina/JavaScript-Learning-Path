/*
  Deploy to Vercel
  ----------------
  Popular for React and Next.js frontends. Free tier available.
*/

const steps = [
  "1. Push code to GitHub",
  "2. Go to vercel.com → Import Git Repository",
  "3. Select your repo",
  "4. Vercel auto-detects React/Next.js",
  "5. Add environment variables (API URL, keys)",
  "6. Click Deploy",
  "7. Get URL: https://your-app.vercel.app",
];

console.log("--- Deploy to Vercel ---");
steps.forEach((step) => console.log(step));
console.log("");
console.log("Best for: React, Next.js, static sites");
console.log("CLI: npx vercel");
