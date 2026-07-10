/*
  File System (fs)
  ----------------
  Read, write, and manage files and directories.
  Use fs/promises with async/await for cleaner code.
*/

const fs = require("fs/promises");
const path = require("path");
const os = require("os");

async function demo() {
  const filePath = path.join(os.tmpdir(), "node-learning-demo.txt");

  await fs.writeFile(filePath, "Hello Node!", "utf8");
  const content = await fs.readFile(filePath, "utf8");

  console.log("--- File System (fs) ---");
  console.log("Written and read:", content);
  console.log("File exists:", await fs.access(filePath).then(() => true).catch(() => false));

  await fs.unlink(filePath);
  console.log("File deleted");
}

demo().catch(console.error);
