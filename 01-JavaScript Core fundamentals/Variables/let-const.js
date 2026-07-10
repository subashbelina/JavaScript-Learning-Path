/*
  let & const
  -----------
  Modern way to declare variables (ES6+).
  let   — can be reassigned, block scoped
  const — cannot be reassigned, block scoped
*/

let score = 10;
score = 20;

const userName = "Subash";
// userName = "Rai"; // Error — cannot reassign const

console.log("--- let & const ---");
console.log(score);
console.log(userName);
