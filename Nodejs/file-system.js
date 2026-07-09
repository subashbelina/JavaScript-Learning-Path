/*
  File System (fs)
  ----------------
  Read, write, and manage files and directories.

  Two styles:
    - Callback style:  fs.readFile(path, callback)
    - Promise style:   fs.promises.readFile(path)  or  require("fs/promises")

  Note: Read and learn only. Paths are relative to where you run node.
*/

const fsExample = `
const fs = require("fs");
const fsp = require("fs/promises");

// --- Read file (callback) ---
fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// --- Write file (promise) ---
async function save() {
  await fsp.writeFile("output.txt", "Hello Node!", "utf8");
  const content = await fsp.readFile("output.txt", "utf8");
  console.log(content);
}

// --- Check if file exists ---
const exists = fs.existsSync("data.txt");

// --- Directory ---
await fsp.mkdir("logs", { recursive: true });
const files = await fsp.readdir(".");
console.log(files);

// --- Delete ---
await fsp.unlink("output.txt");
await fsp.rmdir("logs");
`;

console.log("--- File System (fs) ---");
console.log("fs.readFile(path, encoding, callback)");
console.log("fs.writeFile(path, data, encoding, callback)");
console.log("fs.promises.*  — async/await friendly");
console.log("fs.existsSync(path)  — boolean");
console.log("fs.mkdir / readdir / unlink / rmdir");
console.log("");
console.log("Example:\n", fsExample);
