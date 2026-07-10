/*
  Micro SaaS Project Structure
  ----------------------------
  Small, focused SaaS — one problem, one feature, fast to build.
  Examples: URL shortener, invoice generator, screenshot tool, habit tracker.
*/

const structure = `
practice/my-micro-saas/
├── app/
│   ├── page.js                       ← landing + demo (public)
│   ├── login/page.js
│   ├── register/page.js
│   ├── app/
│   │   └── page.js                   ← THE core feature (auth required)
│   ├── pricing/page.js               ← one paid plan is enough
│   └── api/
│       ├── auth/
│       │   ├── login/route.js
│       │   └── register/route.js
│       ├── items/route.js            ← core CRUD (links, invoices, etc.)
│       └── stripe/
│           ├── checkout/route.js     ← upgrade to pro
│           └── webhook/route.js
├── components/
│   ├── Hero.jsx                      ← landing headline + CTA
│   ├── FeatureForm.jsx               ← main tool UI
│   ├── ItemList.jsx
│   └── UpgradeBanner.jsx             ← show when free limit hit
├── lib/
│   ├── auth.js
│   ├── db.js
│   └── limits.js                     ← free: 10 items, pro: unlimited
└── middleware.js
`;

const microSaaSExamples = [
  { idea: "URL Shortener", core: "Paste long URL → get short link", freeLimit: "10 links" },
  { idea: "Invoice Generator", core: "Fill form → download PDF", freeLimit: "3 invoices/mo" },
  { idea: "Habit Tracker", core: "Log daily habits → see streak", freeLimit: "3 habits" },
  { idea: "QR Generator", core: "Enter text/URL → get QR image", freeLimit: "5 QR codes" },
];

const buildOrder = [
  "1. Landing page with clear value proposition",
  "2. Core feature (works without login first)",
  "3. Add auth — save user data",
  "4. Free tier with limits",
  "5. Stripe checkout for Pro ($5–15/month)",
  "6. Deploy on Vercel",
];

console.log("--- Micro SaaS Project Structure ---");
console.log(structure);
console.log("Micro SaaS = small scope, one feature, solo developer friendly");
console.log("");
console.log("Example ideas:");
microSaaSExamples.forEach((e) => {
  console.log(`  ${e.idea}: ${e.core} (free: ${e.freeLimit})`);
});
console.log("");
console.log("Build order:");
buildOrder.forEach((step) => console.log(`  ${step}`));
