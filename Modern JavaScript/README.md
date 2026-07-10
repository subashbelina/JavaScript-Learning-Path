# Modern JavaScript

ES6+ and newer language features. Read this **after** completing **JavaScript Core fundamentals**.

These files cover syntax added after ES5 (2015). Each file is self-contained — read them in any order, but `intro.js` is a good starting point.

---

## Recommended Order

| # | File | What you learn |
|---|------|----------------|
| 1 | `intro.js` | Overview of modern JS timeline |
| 2 | `optional-chaining.js` | `?.` and `??` (null-safe access) |
| 3 | `logical-assignment.js` | `&&=`, `\|\|=`, `??=` |
| 4 | `set-and-map.js` | Set and Map collections |
| 5 | `weakmap-weakset.js` | WeakMap and WeakSet |
| 6 | `modern-array-methods.js` | `at()`, `toSorted()`, `findLast()` |
| 7 | `numeric-separators.js` | `1_000_000` readability |
| 8 | `promise-methods.js` | `all`, `race`, `allSettled`, `any` |
| 9 | `generators.js` | `function*` and `yield` |
| 10 | `tagged-templates.js` | Tagged template literals |
| 11 | `dynamic-import.js` | Lazy `import()` |
| 12 | `top-level-await.js` | `await` outside async functions |
| 13 | `private-fields.js` | `#private` in classes |
| 14 | `abort-controller.js` | Cancel fetch requests |

---

## How to Study

1. Start with `intro.js` for the big picture
2. Pick one feature you have not seen before
3. Read the file, run it with `node`, tweak the examples
4. Try using the syntax in your `practice/` folder

```bash
node "Modern JavaScript/intro.js"
node "Modern JavaScript/optional-chaining.js"
```

---

## Key Concepts at a Glance

| Feature | Syntax | Use when… |
|---------|--------|-----------|
| Optional chaining | `obj?.prop` | Property might not exist |
| Nullish coalescing | `value ?? default` | Fallback for null/undefined only |
| Set | `new Set([1,2,2])` | Unique values only |
| Map | `new Map()` | Key-value with any key type |
| Dynamic import | `import('./mod.js')` | Load code on demand |
| Top-level await | `await fetch(...)` | Async at module level |

---

## Next Step

When you understand modern syntax, move to:

**[React](../React/README.md)**

React files are **read-only syntax references** — you study the patterns here, then build a real app later with Vite or Create React App.
