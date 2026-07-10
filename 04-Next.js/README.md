# 04 — Next.js

Next.js is a **React framework for production web apps**. Study these files **after** **01**, **02**, and **03**.

> **Note:** These are syntax references. To build a real app later, run: `npx create-next-app@latest`

---

## Recommended Order

| # | File | What you learn |
|---|------|----------------|
| 1 | `intro.js` | What Next.js adds on top of React |
| 2 | `project-structure.js` | How folders map to routes |
| 3 | `routing.js` | File-based routing basics |
| 4 | `page.js` | The `page.js` convention |
| 5 | `layout.js` | Shared layouts across pages |
| 6 | `dynamic-routes.js` | `[id]` and `[...slug]` routes |
| 7 | `navigation.js` | `<Link>` and `useRouter` |
| 8 | `server-components.js` | Render on the server (default) |
| 9 | `client-components.js` | `"use client"` for interactivity |
| 10 | `data-fetching.js` | Fetch data in components |
| 11 | `loading-error.js` | `loading.js` and `error.js` files |
| 12 | `api-routes.js` | Backend endpoints in your app |
| 13 | `server-actions.js` | Server-side form actions |
| 14 | `metadata.js` | SEO titles and descriptions |
| 15 | `middleware.js` | Request filtering and redirects |
| 16 | `built-in-components.js` | Image, Link, Script optimizations |

---

## App Router Mental Model

```
app/
├── layout.js      → Wraps all pages (shared header/footer)
├── page.js        → Home page (/)
├── about/
│   └── page.js    → /about
└── blog/
    ├── page.js    → /blog
    └── [slug]/
        └── page.js → /blog/my-post
```

| Concept | Server Component | Client Component |
|---------|------------------|------------------|
| Runs on | Server | Browser |
| Can use | Databases, secrets | onClick, useState |
| Directive | Default (none) | `"use client"` at top |

---

## How to Study

1. Read `intro.js` and `project-structure.js` first
2. Understand the difference between **server** and **client** components early — it is central to Next.js
3. Read each file's example code carefully
4. When ready, scaffold a real project and try one concept at a time

```bash
node 04-Next.js/intro.js
node 04-Next.js/routing.js
```

---

## When You Are Done

You have covered:

- JavaScript fundamentals
- Modern ES6+ syntax
- React components and hooks
- Next.js routing and server features

**Next:** Move to folder **05-Nodejs** (see main [README.md](../README.md)).

---

## Back to Overview

Return to the main [README.md](../README.md).
