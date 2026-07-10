/*
  ES Modules in Node.js
  ---------------------
  Modern import/export syntax. Enable with "type": "module" in package.json.
*/

function add(a, b) {
  return a + b;
}

function greet(name) {
  return `Hello, ${name}!`;
}

// In a CommonJS file (.js default) we use module.exports:
module.exports = { add, greet };

// In an ES module file ("type": "module") you would write:
// export function add(a, b) { return a + b; }
// export default function greet(name) { return `Hello, ${name}!`; }
// import greet, { add } from "./utils.js";

console.log("--- ES Modules in Node.js ---");
console.log(greet("Subash"));
console.log(add(2, 3));
console.log('Enable ESM: add "type": "module" to package.json');
