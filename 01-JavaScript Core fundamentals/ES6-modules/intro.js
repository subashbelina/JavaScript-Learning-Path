/*
  ES6 Modules — Introduction
  --------------------------
  Modules let you split code into separate files and share values between them.

  Key ideas:
    - export  — send values OUT of a file
    - import  — bring values IN from another file
    - Each file is its own module (private scope)

  Note: Read and learn only. Use these examples when you start a real project.
*/

console.log("--- ES6 Modules ---");
console.log("Modules = separate files that share code");
console.log("");
console.log("Two export types:");
console.log("  1. Named export  — export const, export function");
console.log("  2. Default export — export default");
console.log("");
console.log("Import syntax:");
console.log('  import greet from "./greet.js"        — default');
console.log('  import { add, PI } from "./math.js"   — named');
