/*
  Named Exports
  -------------
  Export multiple values from one file.
  Import using { curly braces } with the exact same names.
*/

const namedExportsExample = `
// math.js — named exports

export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}
`;

console.log("--- Named Exports ---");
console.log("Use when a file exports many things");
console.log("Syntax: export const name = ...");
console.log("        export function name() { ... }");
console.log("");
console.log("Example:\n", namedExportsExample);
