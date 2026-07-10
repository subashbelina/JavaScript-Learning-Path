/*
  Template Literals — Basics
  --------------------------
  Embed variables and expressions inside strings using backticks.
*/

const userName = "Subash";
const age = 25;

const greeting = `Hello, my name is ${userName} and I am ${age} years old.`;

console.log("--- Template Literals ---");
console.log(greeting);
console.log(`Next year I will be ${age + 1}.`);
