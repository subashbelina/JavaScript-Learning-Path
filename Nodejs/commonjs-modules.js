/*
  CommonJS Modules
  ----------------
  Node.js uses CommonJS for sharing code between files (before ES modules).

  Syntax:
    - require("module")     — import a module
    - module.exports = …    — export one value
    - exports.name = …      — export named values

  Note: Read and learn only. Modern projects may use "type": "module" in package.json.
*/

// --- Import built-in module ---
// const fs = require("fs");

// --- Import local file ---
// const helpers = require("./helpers.js");

// --- Export single value ---
// module.exports = function greet(name) {
//   return `Hello, ${name}!`;
// };

// --- Export multiple named values ---
// exports.add = (a, b) => a + b;
// exports.subtract = (a, b) => a - b;

// --- Destructuring on require ---
// const { readFile, writeFile } = require("fs").promises;
// const { join, resolve } = require("path");

const example = `
// math.js
function add(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}

module.exports = { add, multiply };

// app.js
const { add, multiply } = require("./math.js");
console.log(add(2, 3));       // 5
console.log(multiply(4, 5));  // 20
`;

console.log("--- CommonJS Modules ---");
console.log("require()        — load a module");
console.log("module.exports   — what the file exports");
console.log("exports.x        — shorthand for named exports");
console.log("");
console.log("Example:\n", example);
