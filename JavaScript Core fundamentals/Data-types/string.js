/*
  String (Primitive)
  ------------------
  Text wrapped in quotes. Immutable — stored by value.
*/

let userName = "Subash";
let greeting = 'Hello';
let message = `Hi, ${userName}!`; // template literal

console.log("--- String ---");
console.log(userName);
console.log(greeting);
console.log(message);
console.log(typeof userName); // "string"

// Next → number.js  |  Full order: see README.md in this folder
