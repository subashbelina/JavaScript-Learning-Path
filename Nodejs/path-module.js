/*
  Path Module
  -----------
  Work with file and directory paths in a cross-platform way.

  Note: Read and learn only. Always use path.join() instead of string + "/".
*/

const path = require("path");

const filePath = "/users/subash/projects/app/index.js";

console.log("--- Path Module ---");
console.log("path.join('a', 'b', 'c')     →", path.join("users", "subash", "app.js"));
console.log("path.resolve('..', 'app')    →", path.resolve("..", "app"));
console.log("path.basename(filePath)      →", path.basename(filePath));
console.log("path.dirname(filePath)       →", path.dirname(filePath));
console.log("path.extname(filePath)       →", path.extname(filePath));
console.log("path.parse(filePath)         →", path.parse(filePath));
console.log("path.isAbsolute('/tmp')      →", path.isAbsolute("/tmp"));
console.log("__dirname                  → folder of current file");
console.log("__filename                 → full path of current file");

const pathExample = `
const path = require("path");

// Safe path building (works on Windows & Linux)
const full = path.join(__dirname, "data", "users.json");

// Get extension without the dot logic yourself
const ext = path.extname("photo.png");  // ".png"

// Split path into parts
const { root, dir, base, name, ext } = path.parse("/home/app/server.js");
`;

console.log("");
console.log("Example:\n", pathExample);
