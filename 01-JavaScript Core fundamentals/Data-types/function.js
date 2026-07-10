/*
  Function (Non-Primitive)
  ------------------------
  Reusable block of code. Functions are also objects.
  Mutable — stored by reference.
*/

function greet(userName) {
  return `Hello, ${userName}!`;
}

const add = (a, b) => a + b; // arrow function

console.log("--- Function ---");
console.log(greet("Subash"));
console.log(add(5, 3));
console.log(typeof greet); // "function"
