/*
  Array Destructuring
  -------------------
  Extract values from arrays into variables.
*/

const colors = ["Red", "Green", "Blue"];

const [first, second, third] = colors;
const [primary, , tertiary] = colors; // skip second item

console.log("--- Array Destructuring ---");
console.log(first, second, third);
console.log(primary, tertiary);

const [head, ...rest] = colors;
console.log(head); // "Red"
console.log(rest); // ["Green", "Blue"]
