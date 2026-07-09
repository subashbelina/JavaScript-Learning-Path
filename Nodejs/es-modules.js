/*
  ES Modules in Node.js
  ---------------------
  Modern import/export syntax in Node (alternative to CommonJS).

  Setup: add "type": "module" in package.json, or use .mjs extension.

  Note: Read and learn only. Many older tutorials still use require().
*/

const esmExample = `
// package.json
// { "type": "module" }

// math.js — named exports
export function add(a, b) {
  return a + b;
}
export const PI = 3.14159;

// utils.js — default export
export default function greet(name) {
  return \`Hello, \${name}!\`;
}

// app.js — imports
import greet from "./utils.js";
import { add, PI } from "./math.js";
import fs from "node:fs/promises";  // node: prefix for built-ins

console.log(greet("Subash"));
console.log(add(2, PI));

// Dynamic import (lazy load)
const module = await import("./heavy-module.js");

// __dirname in ESM (no global by default)
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
`;

console.log("--- ES Modules in Node.js ---");
console.log('"type": "module" in package.json  — enable import/export');
console.log("import x from './file.js'         — default import");
console.log("import { a, b } from './file.js'  — named import");
console.log("export / export default           — export values");
console.log("import.meta.url                   — current module URL");
console.log("await import('./file.js')         — dynamic import");
console.log("");
console.log("Example:\n", esmExample);
