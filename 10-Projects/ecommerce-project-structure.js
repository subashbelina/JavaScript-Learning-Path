/*
  E-Commerce Project Structure
  ----------------------------
  Online store — products, cart, checkout, orders, payments.
  Best built with Next.js or React + Express after folders 04, 06, 07, 08.
*/

const structure = `
practice/my-shop/
├── app/                              ← Next.js (or client/src/pages/)
│   ├── page.js                       ← home / featured products
│   ├── products/
│   │   ├── page.js                   ← /products (catalog)
│   │   └── [id]/
│   │       └── page.js               ← /products/42 (product detail)
│   ├── cart/
│   │   └── page.js                   ← shopping cart
│   ├── checkout/
│   │   └── page.js                   ← payment step
│   ├── orders/
│   │   └── page.js                   ← order history (auth required)
│   └── api/
│       ├── products/
│       │   └── route.js              ← GET /api/products
│       ├── cart/
│       │   └── route.js              ← POST /api/cart
│       ├── checkout/
│       │   └── route.js              ← POST /api/checkout
│       └── webhooks/
│           └── stripe/
│               └── route.js          ← payment confirmation
├── components/
│   ├── ProductCard.jsx
│   ├── CartItem.jsx
│   ├── Navbar.jsx
│   └── CheckoutForm.jsx
├── lib/
│   ├── db.js                         ← database connection
│   ├── stripe.js                     ← payment setup
│   └── cart.js                       ← cart helpers
└── models/
    ├── product.js
    ├── order.js
    └── user.js
`;

const coreFeatures = [
  "Products   →  name, price, image, stock",
  "Cart       →  add, remove, update quantity",
  "Checkout   →  shipping info + payment (Stripe)",
  "Orders     →  save order after successful payment",
  "Auth       →  users see their order history",
];

const apiRoutes = [
  "GET    /api/products          → list products",
  "GET    /api/products/:id      → one product",
  "POST   /api/cart              → add to cart",
  "POST   /api/checkout          → create payment session",
  "GET    /api/orders            → user's orders (protected)",
];

console.log("--- E-Commerce Project Structure ---");
console.log(structure);
console.log("Core features:");
coreFeatures.forEach((f) => console.log(`  ${f}`));
console.log("");
console.log("API routes:");
apiRoutes.forEach((r) => console.log(`  ${r}`));
console.log("");
console.log("Payments: Stripe (stripe.com) — test mode for learning");
