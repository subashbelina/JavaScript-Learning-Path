/*
  Array Mutation Methods
  ----------------------
  push, pop, shift, unshift — change the original array.
*/

const skills = ["HTML", "CSS"];

console.log("--- push / pop / shift / unshift ---");

skills.push("JavaScript");    // add to end
console.log(skills);          // ["HTML", "CSS", "JavaScript"]

skills.pop();                 // remove from end
console.log(skills);          // ["HTML", "CSS"]

skills.unshift("Git");        // add to start
console.log(skills);          // ["Git", "HTML", "CSS"]

skills.shift();               // remove from start
console.log(skills);          // ["HTML", "CSS"]
