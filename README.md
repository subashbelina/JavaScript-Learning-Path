# Js-Learning-Path

> **Repository:** [github.com/subashbelina/JavaScript-Learning-Path](https://github.com/subashbelina/JavaScript-Learning-Path)

A **read-and-learn** JavaScript roadmap for beginners and self-taught developers. Each topic lives in its own folder with small, focused files — one concept per file, clear comments, and runnable examples.

**No npm install. No project setup. Just open the files and study.**

You do not need to know JavaScript already. Start at `JavaScript Core fundamentals` and move forward when you feel comfortable.

---

## Quick Start

| Step | What to do |
|------|------------|
| 1 | Install [VS Code](https://code.visualstudio.com/) or [Cursor](https://cursor.com/) and open this folder |
| 2 | Open `JavaScript Core fundamentals/Data-types/string.js` |
| 3 | Follow the folders in order (Core fundamentals → Modern JS → React → Next.js) |
| 4 | Practice in the local `practice/` folder (not tracked by git) |

**Optional — run a file in the terminal:**

```bash
node "JavaScript Core fundamentals/Data-types/string.js"
node "JavaScript Core fundamentals/Variables/let-const.js"
node "Modern JavaScript/optional-chaining.js"
node React/intro.js
```

**DOM basics — open in a browser:**

```bash
open "JavaScript Core fundamentals/DOM-basics/index.html"
```

---

## Learning Path

Follow the folders top to bottom. Each folder has its own `README.md` with a recommended file order.

```
Js-Learning-Path/
├── JavaScript Core fundamentals/   ← Core language (start here)
├── Modern JavaScript/              ← ES6+ features
├── React/                          ← React library concepts
├── Next.js/                        ← Next.js framework
└── practice/                       ← Your experiments (local only)
```

| # | Folder | What you'll learn | Time estimate |
|---|--------|-------------------|---------------|
| 1 | [JavaScript Core fundamentals](JavaScript%20Core%20fundamentals/README.md) | Variables, functions, arrays, async, DOM | 2–4 weeks |
| 2 | [Modern JavaScript](Modern%20JavaScript/README.md) | Optional chaining, Set/Map, generators | 1 week |
| 3 | [React](React/README.md) | Components, JSX, hooks, state | 1–2 weeks |
| 4 | [Next.js](Next.js/README.md) | Routing, server components, API routes | 1–2 weeks |

### First-day path

Work through **JavaScript Core fundamentals** using the full order in its [README](JavaScript%20Core%20fundamentals/README.md). A good start for day one:

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
| JavaScript Core fundamentals | [Modern JavaScript](Modern%20JavaScript/README.md) |
| Modern JS topics | [React](React/README.md) |
| React concepts | [Next.js](Next.js/README.md) |
| Everything | Build a real project with Vite or Create Next App |

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

React and Next.js files show **syntax reference** in comments and template strings — they are not runnable apps. Read them like a textbook.

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

## Requirements

- A code editor ([VS Code](https://code.visualstudio.com/) or [Cursor](https://cursor.com/))
- [Node.js](https://nodejs.org/) — optional, only if you want to run `.js` files in the terminal
- A web browser — for the DOM basics HTML demo

---

## Tips for New Developers

- **Go in order.** Fundamentals before React. React before Next.js.
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
Roughly 6–10 weeks at a steady pace. There is no deadline — go at your own speed.

---

## License

Free to use for personal learning and teaching.
