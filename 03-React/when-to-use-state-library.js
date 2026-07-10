/*
  When to Use a State Library
  ---------------------------
  useState + Context is enough for most small apps.
  Reach for a library when global state gets hard to manage.

  Optional — study after fetch-patterns.js.
*/

const decisionGuide = `
Start with built-in React:
  useState     → local component state
  lifting state → share between siblings via parent
  Context      → share across many components (theme, auth user)

When Context feels painful:
  - Many components update the same data often
  - Provider tree gets deeply nested
  - Performance issues from re-rendering everything
  - Logic spread across many files

Then consider:
  Zustand      → simple global store (good first library)
  Redux Toolkit → large apps, strict patterns, common in jobs
`;

console.log("--- When to Use a State Library ---");
console.log("Built-in first: useState → lifting state → Context");
console.log("");
console.log("Signs you need a library:");
console.log("  - Global state updates in many places");
console.log("  - Too many Context providers");
console.log("  - Hard to trace who changed what");
console.log("");
console.log("Good first pick: Zustand (see zustand-intro.js)");
console.log("");
console.log(decisionGuide);
