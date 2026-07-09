/*
  Async Patterns in Node.js
  -------------------------
  Node.js I/O is async by design. Three common styles:

    1. Callbacks   — fs.readFile(path, cb)
    2. Promises    — fs.promises.readFile(path)
    3. async/await — await fs.promises.readFile(path)

  Note: Read and learn only. Prefer async/await for new code.
*/

const asyncExample = `
const fs = require("fs");
const fsp = require("fs/promises");

// --- 1. Callback (older style) ---
fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) return console.error(err);
  console.log(data);
});

// --- 2. Promise chain ---
fsp.readFile("data.txt", "utf8")
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

// --- 3. async/await (recommended) ---
async function loadData() {
  try {
    const data = await fsp.readFile("data.txt", "utf8");
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

// --- Parallel async (like Promise.all) ---
async function loadAll() {
  const [users, posts] = await Promise.all([
    fsp.readFile("users.json", "utf8"),
    fsp.readFile("posts.json", "utf8"),
  ]);
  return { users: JSON.parse(users), posts: JSON.parse(posts) };
}

// --- util.promisify — turn callback fn into promise ---
const { promisify } = require("util");
const readFile = promisify(fs.readFile);
const data = await readFile("data.txt", "utf8");
`;

console.log("--- Async Patterns in Node.js ---");
console.log("Callbacks     — (err, result) => { … }");
console.log("Promises      — .then() / .catch()");
console.log("async/await   — cleanest for sequential I/O");
console.log("Promise.all   — run multiple async tasks in parallel");
console.log("util.promisify — wrap legacy callback APIs");
console.log("");
console.log("Example:\n", asyncExample);
