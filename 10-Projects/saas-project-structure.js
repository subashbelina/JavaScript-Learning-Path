/*
  SaaS Project Structure
  ----------------------
  Software as a Service — subscription app with dashboard and billing.
  Examples: Notion, Slack, project management tools.
*/

const structure = `
practice/my-saas/
├── app/
│   ├── page.js                       ← landing / marketing page
│   ├── login/
│   │   └── page.js
│   ├── register/
│   │   └── page.js
│   ├── dashboard/                    ← main app (auth required)
│   │   ├── page.js                   ← overview / stats
│   │   ├── projects/
│   │   │   └── page.js
│   │   └── settings/
│   │       └── page.js
│   ├── pricing/
│   │   └── page.js                   ← free / pro / team plans
│   └── api/
│       ├── auth/
│       │   ├── login/route.js
│       │   └── register/route.js
│       ├── projects/
│       │   └── route.js              ← CRUD user projects
│       ├── subscription/
│       │   └── route.js              ← plan status
│       └── webhooks/
│           └── stripe/route.js       ← subscription events
├── components/
│   ├── DashboardLayout.jsx
│   ├── Sidebar.jsx
│   ├── PricingCard.jsx
│   └── ProjectList.jsx
├── lib/
│   ├── auth.js
│   ├── db.js
│   └── stripe.js
└── middleware.js                     ← protect /dashboard routes
`;

const saasFeatures = [
  "Landing page    →  explain product, pricing, sign up",
  "Auth            →  register, login, JWT/session",
  "Dashboard       →  main app after login",
  "Subscriptions   →  free, pro, team plans (Stripe)",
  "Teams (optional)→  invite members, roles",
  "Settings        →  profile, billing, cancel plan",
];

const plans = [
  { name: "Free", price: "$0", features: ["1 project", "Basic support"] },
  { name: "Pro", price: "$12/mo", features: ["Unlimited projects", "Priority support"] },
  { name: "Team", price: "$29/mo", features: ["5 members", "Admin panel"] },
];

console.log("--- SaaS Project Structure ---");
console.log(structure);
console.log("Core features:");
saasFeatures.forEach((f) => console.log(`  ${f}`));
console.log("");
console.log("Example pricing plans:");
plans.forEach((p) => console.log(`  ${p.name} (${p.price}): ${p.features.join(", ")}`));
