# Js-Learning-Path

> **Repository:** [github.com/subashbelina/JavaScript-Learning-Path](https://github.com/subashbelina/JavaScript-Learning-Path)

A **read-and-learn** JavaScript roadmap for beginners and self-taught developers. Each topic lives in its own folder with small, focused files — one concept per file, clear comments, and runnable examples.

**No npm install. No project setup. Just open the files and study.**

You do not need to know JavaScript already. Start at `01-JavaScript Core fundamentals` and follow the numbered folders in order.

---

## Quick Start

| Step | What to do |
|------|------------|
| 1 | Install [VS Code](https://code.visualstudio.com/) or [Cursor](https://cursor.com/) and open this folder |
| 2 | Open `01-JavaScript Core fundamentals/Data-types/string.js` |
| 3 | Follow folders **01 → 02 → … → 13** in order |
| 4 | Practice in the local `practice/` folder (not tracked by git) |

**Optional — run a file in the terminal:**

```bash
node "01-JavaScript Core fundamentals/Data-types/string.js"
node "01-JavaScript Core fundamentals/Variables/let-const.js"
node "02-Modern JavaScript/optional-chaining.js"
node 03-React/intro.js
node 05-Nodejs/intro.js
node 06-Express/intro.js
node 07-Database/intro.js
node 08-Auth/intro.js
node 09-TypeScript/intro.js
node 10-Projects/intro.js
node 11-Git-GitHub/intro.js
node 12-Testing/intro.js
node 13-Deployment/intro.js
```

**DOM basics — open in a browser:**

```bash
open "01-JavaScript Core fundamentals/DOM-basics/index.html"
```

---

## Learning Path

Follow the numbered folders top to bottom. Each folder has its own `README.md` with a recommended file order.

```
Js-Learning-Path/
├── 01-JavaScript Core fundamentals/   ← Start here
├── 02-Modern JavaScript/              ← ES6+ features
├── 03-React/                          ← React library
├── 04-Next.js/                        ← Next.js framework
├── 05-Nodejs/                         ← Node.js runtime & backend
├── 06-Express/                        ← Express.js web framework
├── 07-Database/                       ← SQL, MongoDB, CRUD
├── 08-Auth/                           ← Login, JWT, protected routes
├── 09-TypeScript/                     ← Types, interfaces, generics
├── 10-Projects/                       ← Full-stack todo app guide
├── 11-Git-GitHub/                     ← Version control workflow
├── 12-Testing/                        ← Jest and unit tests
├── 13-Deployment/                     ← Publish your app online
└── practice/                          ← Your experiments (local only)
```

| # | Folder | What you'll learn | Time estimate |
|---|--------|-------------------|---------------|
| 01 | [JavaScript Core fundamentals](01-JavaScript%20Core%20fundamentals/README.md) | Variables, functions, arrays, async, DOM | 2–4 weeks |
| 02 | [Modern JavaScript](02-Modern%20JavaScript/README.md) | Optional chaining, Set/Map, generators | 1 week |
| 03 | [React](03-React/README.md) | Components, JSX, hooks, state | 1–2 weeks |
| 04 | [Next.js](04-Next.js/README.md) | Routing, server components, API routes | 1–2 weeks |
| 05 | Nodejs | Server-side JS, built-in modules, npm | 1–2 weeks |
| 06 | Express | REST APIs, routing, middleware | 1 week |
| 07 | Database | SQL, MongoDB, CRUD, relationships | 1 week |
| 08 | Auth | Passwords, JWT, login, protected routes | 1 week |
| 09 | TypeScript | Types, interfaces, generics | 1–2 weeks |
| 10 | Projects | Full-stack todo app (ties 03–08 together) | 2 weeks |
| 11 | Git-GitHub | commit, branch, push, pull requests | 3–5 days |
| 12 | Testing | Unit tests, mocks, Jest setup | 3–5 days |
| 13 | Deployment | Vercel, Railway, go live | 3–5 days |

### 05 — Nodejs (read in this order)

Study **after** folders 01–04. You need JavaScript basics, async/await, and HTTP concepts first.

**Mental model:** Browser JS has `document` and `DOM`. Node.js has `fs`, `path`, `http`, and `process`. Same language, different environment.

| Phase | # | File | What you learn |
|-------|---|------|----------------|
| **1 — Understand Node** | 1 | `intro.js` | What Node.js is |
| | 2 | `npm-basics.js` | package.json, scripts, dependencies |
| | 3 | `commonjs-modules.js` | require() and module.exports |
| | 4 | `async-patterns.js` | Callbacks, promises, async/await |
| | 5 | `process-env.js` | process.env, argv, platform |
| **2 — Files & Paths** | 6 | `path-module.js` | join, resolve, basename, extname |
| | 7 | `file-system.js` | Read, write, delete files (fs) |
| | 8 | `error-handling.js` | try/catch, err.code |
| **3 — Build a Server** | 9 | `es-modules.js` | import/export in Node |
| | 10 | `http-server.js` | Basic HTTP server |
| | 11 | `url-module.js` | Parse URLs and query strings |
| | 12 | `events-emitter.js` | on, emit, once |
| **4 — Advanced** | 13 | `buffer.js` | Binary data |
| | 14 | `streams.js` | Data in chunks |
| | 15 | `os-module.js` | CPU, memory, platform |
| | 16 | `crypto-basics.js` | Hashing, random bytes |
| | 17 | `child-process.js` | Run shell commands |

```bash
node 05-Nodejs/intro.js
node 05-Nodejs/path-module.js
node 05-Nodejs/file-system.js
node 05-Nodejs/events-emitter.js
```

### 06 — Express (read in this order)

Study **after** folder 05. Express builds on Node.js `http` to make APIs easier.

**Mental model:** Node `http` = manual wiring. Express = `app.get()`, `res.json()`, middleware chain.

| # | File | What you learn |
|---|------|----------------|
| 1 | `intro.js` | What Express is |
| 2 | `setup.js` | Create app and listen on a port |
| 3 | `routing.js` | GET, POST routes |
| 4 | `route-params.js` | Dynamic `:id` segments |
| 5 | `query-params.js` | `?role=admin&page=1` filters |
| 6 | `json-body.js` | POST body with `express.json()` |
| 7 | `middleware.js` | Functions that run before routes |
| 8 | `router.js` | Split routes into modules |
| 9 | `static-files.js` | Serve HTML, CSS, images |
| 10 | `error-handling.js` | Catch and return errors |
| 11 | `rest-api.js` | Full CRUD API pattern |

```bash
node 06-Express/intro.js
node 06-Express/routing.js
node 06-Express/middleware.js
node 06-Express/rest-api.js
```

To run a real Express server: `mkdir practice/my-api && cd practice/my-api && npm init -y && npm install express`

### 07 — Database (read in this order)

Study **after** folder 06. Databases store data permanently for your API.

| # | File | What you learn |
|---|------|----------------|
| 1 | `intro.js` | What a database is |
| 2 | `sql-vs-nosql.js` | SQL tables vs MongoDB documents |
| 3 | `sql-basics.js` | SELECT, INSERT, UPDATE, DELETE |
| 4 | `mongodb-basics.js` | Collections and documents |
| 5 | `connect.js` | Connection strings and drivers |
| 6 | `crud-operations.js` | Create, read, update, delete |
| 7 | `find-queries.js` | Filter, sort, limit |
| 8 | `relationships.js` | Link users to posts |
| 9 | `schema-validation.js` | Validate data before saving |

```bash
node 07-Database/intro.js
node 07-Database/sql-basics.js
node 07-Database/crud-operations.js
```

### 08 — Auth (read in this order)

Study **after** folder 07. Secure your API with login and tokens.

| # | File | What you learn |
|---|------|----------------|
| 1 | `intro.js` | Authentication vs authorization |
| 2 | `password-hashing.js` | Never store plain passwords |
| 3 | `register.js` | Sign up flow |
| 4 | `login.js` | Sign in and return token |
| 5 | `jwt-basics.js` | JWT structure (header.payload.signature) |
| 6 | `protected-routes.js` | Block access without token |
| 7 | `sessions-vs-jwt.js` | Sessions vs JWT comparison |
| 8 | `auth-middleware.js` | Auth middleware chain |
| 9 | `env-secrets.js` | JWT_SECRET in .env file |

```bash
node 08-Auth/intro.js
node 08-Auth/login.js
node 08-Auth/jwt-basics.js
node 08-Auth/protected-routes.js
```

### 09 — TypeScript (read in this order)

Study **after** folders 01–03 (or anytime after JS basics). Used in most modern jobs.

| # | File | What you learn |
|---|------|----------------|
| 1 | `intro.js` | What TypeScript is |
| 2 | `basic-types.js` | string, number, boolean, array |
| 3 | `interfaces.js` | Object shapes |
| 4 | `functions.js` | Typed parameters and return |
| 5 | `objects-arrays.js` | Typed collections |
| 6 | `union-types.js` | string \| number, literal types |
| 7 | `optional-readonly.js` | Optional props, readonly |
| 8 | `generics.js` | Reusable types |
| 9 | `react-typescript.js` | Typing React props and state |
| 10 | `node-typescript.js` | Typing Express handlers |

```bash
node 09-TypeScript/intro.js
node 09-TypeScript/basic-types.js
node 09-TypeScript/interfaces.js
```

Real TypeScript: `npm install typescript && npx tsc --init` in `practice/`

### 10 — Projects (read in this order)

Study **after** folders 03–09. Build a todo app that combines everything.

| # | File | What you learn |
|---|------|----------------|
| 1 | `intro.js` | Why projects matter |
| 2 | `todo-plan.js` | Plan routes and data first |
| 3 | `todo-api.js` | Todo CRUD backend |
| 4 | `todo-with-auth.js` | Per-user todos |
| 5 | `todo-react.js` | Frontend fetch pattern |
| 6 | `full-stack-flow.js` | Browser → API → DB flow |
| 7 | `project-structure.js` | Folder layout for real app |
| 8 | `build-checklist.js` | Steps to build in practice/ |

```bash
node 10-Projects/intro.js
node 10-Projects/todo-api.js
node 10-Projects/full-stack-flow.js
```

### 11 — Git-GitHub (read in this order)

Study **after** folder 10. Version control for your projects.

| # | File | What you learn |
|---|------|----------------|
| 1 | `intro.js` | What Git and GitHub are |
| 2 | `basic-commands.js` | init, add, commit, status |
| 3 | `branches.js` | Feature branches |
| 4 | `push-pull.js` | Sync with GitHub |
| 5 | `pull-requests.js` | Code review workflow |
| 6 | `gitignore.js` | Files to never commit |
| 7 | `daily-workflow.js` | Daily Git routine |
| 8 | `common-mistakes.js` | Avoid beginner errors |

```bash
node 11-Git-GitHub/intro.js
node 11-Git-GitHub/basic-commands.js
node 11-Git-GitHub/daily-workflow.js
```

### 12 — Testing (read in this order)

Study **after** folder 11. Catch bugs before users do.

| # | File | What you learn |
|---|------|----------------|
| 1 | `intro.js` | Why testing matters |
| 2 | `mini-test-runner.js` | How expect() works |
| 3 | `unit-tests.js` | Test one function |
| 4 | `test-structure.js` | describe() and it() |
| 5 | `async-tests.js` | Test async code |
| 6 | `mock-functions.js` | Fake database in tests |
| 7 | `api-testing.js` | Test HTTP endpoints |
| 8 | `jest-setup.js` | Add Jest to a project |

```bash
node 12-Testing/intro.js
node 12-Testing/mini-test-runner.js
node 12-Testing/unit-tests.js
```

### 13 — Deployment (read in this order)

Study **last**. Put your app on the internet.

| # | File | What you learn |
|---|------|----------------|
| 1 | `intro.js` | What deployment means |
| 2 | `env-production.js` | Dev vs production env |
| 3 | `build-frontend.js` | npm run build |
| 4 | `deploy-vercel.js` | Deploy React/Next.js |
| 5 | `deploy-backend.js` | Deploy Express API |
| 6 | `database-cloud.js` | MongoDB Atlas, Supabase |
| 7 | `domain-https.js` | Custom domain and HTTPS |
| 8 | `deploy-checklist.js` | Final checks before go-live |

```bash
node 13-Deployment/intro.js
node 13-Deployment/deploy-checklist.js
```

### First-day path (folder 01)

Work through **01-JavaScript Core fundamentals** using the full order in its [README](01-JavaScript%20Core%20fundamentals/README.md). A good start for day one:

| Order | File | Topic |
|-------|------|-------|
| 1 | `Data-types/string.js` | Text in JavaScript |
| 2 | `Data-types/number.js` | Numbers and math |
| 3 | `Data-types/boolean.js` | true / false |
| 4 | `Variables/let-const.js` | Modern variables |
| 5 | `Variables/var.js` | Old-style variables (know it exists) |
| 6 | `Operator/arithmetic.js` | +, -, *, / |
| 7 | `Conditionals/if-else.js` | Making decisions |
| 8 | `Loops/for.js` | Repeating actions |

Stop when your brain feels full. Come back tomorrow.

### What comes next?

| When you finish… | Go to… |
|------------------|--------|
| 01 — JavaScript Core fundamentals | [02 — Modern JavaScript](02-Modern%20JavaScript/README.md) |
| 02 — Modern JavaScript | [03 — React](03-React/README.md) |
| 03 — React | [04 — Next.js](04-Next.js/README.md) |
| 04 — Next.js | Folder `05-Nodejs` (see README) |
| 05 — Nodejs | Folder `06-Express` (see README) |
| 06 — Express | Folder `07-Database` (see README) |
| 07 — Database | Folder `08-Auth` (see README) |
| 08 — Auth | Folder `09-TypeScript` (see README) |
| 09 — TypeScript | Folder `10-Projects` (see README) |
| 10 — Projects | Folder `11-Git-GitHub` (see README) |
| 11 — Git-GitHub | Folder `12-Testing` (see README) |
| 12 — Testing | Folder `13-Deployment` (see README) |
| 13 — Deployment | You are job-ready — keep building in `practice/`! |

---

## How Each File Works

Every `.js` file follows the same pattern:

1. **Header comment** — what the concept is and why it matters
2. **Code examples** — short, focused syntax you can read and copy
3. **Console output** — run with `node filename.js` to see results

**How to study a file:**

1. Read the header comment
2. Read each line of code
3. Guess what `console.log` will print
4. Run the file and compare with your guess
5. Change one value and run again

React and Next.js files show **syntax reference** in comments — read them like a textbook. Folders **05–13** are runnable with `node`, like folder 01.

---

## Practice Folder

Create and use `practice/` on your machine to write your own experiments. It is listed in `.gitignore` so your practice code stays local and is never pushed to GitHub.

```bash
mkdir -p practice
echo 'console.log("My first practice file!");' > practice/hello.js
node practice/hello.js
```

### Starter exercises

After reading each fundamentals file, try these in `practice/`:

**After `Data-types/string.js`**
```js
// practice/strings.js
let first = "Hello";
let last = "World";
console.log(`${first}, ${last}!`);
```

**After `Variables/let-const.js`**
```js
// practice/variables.js
let age = 25;
age = 26;
const country = "Nepal";
console.log(age, country);
```

**After `Array-methods/map.js`**
```js
// practice/map-practice.js
const prices = [10, 20, 30];
const withTax = prices.map((p) => p * 1.13);
console.log(withTax);
```

**After `Async-await/async-await.js`**
```js
// practice/async-practice.js
async function main() {
  const result = await Promise.resolve("Done!");
  console.log(result);
}
main();
```

**Practice tips:** Name files clearly (`loops-practice.js`, `objects-practice.js`). Break things on purpose. Rewrite examples from memory before peeking at the originals.

---

## What You Will Learn

- JavaScript from scratch to job-ready fundamentals
- Modern JS (ES6, ES2020, ES2022+)
- React component patterns and hooks
- Next.js full-stack concepts
- Node.js server-side JavaScript, built-in modules, and npm
- Express REST APIs, routing, and middleware
- Databases (SQL, MongoDB), auth (JWT), and TypeScript
- Full-stack projects, Git, testing, and deployment
- DOM manipulation and async programming

---

## Requirements

- A code editor ([VS Code](https://code.visualstudio.com/) or [Cursor](https://cursor.com/))
- [Node.js](https://nodejs.org/) — optional, only if you want to run `.js` files in the terminal
- A web browser — for the DOM basics HTML demo

---

## Tips for New Developers

- **Go in order.** Follow 01 → 02 → … → 13.
- **One file at a time.** Do not rush through a whole folder in one sitting.
- **Type the code yourself.** Copy-pasting teaches less than typing and tweaking.
- **Break things on purpose.** Change values, comment out lines, see what happens.
- **Use the practice folder.** Rewrite examples from memory after reading them.

---

## Common Questions

**Do I need to memorize everything?**
No. Focus on understanding patterns. You will look things up throughout your career.

**Should I run every file?**
Helpful but not required. Files with real code examples benefit most from running.

**The React/Next.js files don't run. Is that broken?**
No. Those files are **syntax references** — read them like textbook pages. You will run real React/Next apps when you build a project later.

**How long does the full path take?**
Roughly 10–14 weeks at a steady pace. There is no deadline — go at your own speed.

---

## License

Free to use for personal learning and teaching.
