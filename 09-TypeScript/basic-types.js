/*
  Basic Types
  -----------
  string, number, boolean, array — type annotations catch mistakes early.
*/

/** @type {string} */
const userName = "Subash";

/** @type {number} */
const age = 25;

/** @type {boolean} */
const isActive = true;

/** @type {string[]} */
const skills = ["JavaScript", "React", "Node"];

console.log("--- Basic Types ---");
console.log("userName:", userName, typeof userName);
console.log("age:", age, typeof age);
console.log("isActive:", isActive, typeof isActive);
console.log("skills:", skills);

// TypeScript:
// const userName: string = "Subash";
// const age: number = 25;
// const skills: string[] = ["JavaScript", "React"];
