/*
  Typed Functions
  ---------------
  Specify parameter types and return type.
*/

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  return a + b;
}

/**
 * @param {string} name
 * @returns {string}
 */
function greet(name) {
  return `Hello, ${name}!`;
}

console.log("--- Typed Functions ---");
console.log(add(2, 3));        // 5
console.log(greet("Subash"));  // Hello, Subash!

// TypeScript:
// function add(a: number, b: number): number {
//   return a + b;
// }
