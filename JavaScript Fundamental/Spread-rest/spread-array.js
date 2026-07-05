/*
  Spread in Arrays
  ----------------
  Expand an array into individual items.
*/

const frontend = ["HTML", "CSS"];
const backend = ["Node.js", "Express"];
const allSkills = [...frontend, "JavaScript", ...backend];

const original = [1, 2, 3];
const copy = [...original];

console.log("--- Spread in Arrays ---");
console.log(allSkills);
console.log(copy);
console.log(original === copy); // false — new array
