# React

React is a **JavaScript library for building user interfaces**. Study these files **after** **JavaScript Core fundamentals** and **Modern JavaScript**.

> **Note:** These files are syntax references, not runnable apps. Read them like a textbook. You will write real React code when you create a project with Vite or Create React App.

---

## Recommended Order

| # | File | What you learn |
|---|------|----------------|
| 1 | `intro.js` | What React is and why it exists |
| 2 | `jsx.js` | HTML-like syntax inside JavaScript |
| 3 | `components.js` | Reusable UI pieces |
| 4 | `props.js` | Passing data into components |
| 5 | `state.js` | `useState` — data that changes |
| 6 | `events.js` | Handling clicks and input |
| 7 | `conditional-rendering.js` | Show/hide UI based on conditions |
| 8 | `lists-keys.js` | Rendering arrays with `.map()` |
| 9 | `forms.js` | Controlled inputs |
| 10 | `use-effect.js` | Side effects (fetch, timers) |
| 11 | `lifting-state.js` | Sharing state between components |
| 12 | `context.js` | Avoid prop drilling |
| 13 | `custom-hooks.js` | Reusable logic with hooks |
| 14 | `fragments.js` | `<>...</>` without extra DOM nodes |

---

## Core Concepts

```
Component  →  A function that returns JSX (UI)
Props      →  Data passed from parent to child (read-only)
State      →  Data a component owns and can update
Hooks      →  useState, useEffect, and custom hooks
```

### Minimal mental model

```jsx
function Greeting({ name }) {          // props
  const [count, setCount] = useState(0); // state

  return (
    <div>
      <p>Hello, {name}! Clicks: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}
```

---

## How to Study

1. Read `intro.js` first
2. For each file: read the header comment, then study the code example inside the template string
3. Copy an example into your `practice/` folder and modify it
4. When ready, create a real project: `npm create vite@latest my-app -- --template react`

```bash
node React/intro.js
node React/state.js
```

---

## Common Mistakes to Avoid

- **Do not mutate state directly** — always use the setter (`setCount`, not `count++`)
- **Keys in lists** — every item in `.map()` needs a unique `key`
- **Hooks at top level** — never call hooks inside if/for blocks

---

## Next Step

When you understand components, props, state, and hooks, move to:

**[Next.js](../Next.js/README.md)**

Next.js builds on React and adds routing, server rendering, and full-stack features.
