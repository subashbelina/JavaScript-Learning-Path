/*
  Array.includes() & indexOf()
  ------------------------------
  includes — check if value exists (true/false)
  indexOf  — return index of value (-1 if not found)
*/

const fruits = ["Apple", "Banana", "Orange"];

console.log("--- includes() & indexOf() ---");
console.log(fruits.includes("Banana")); // true
console.log(fruits.includes("Grape"));  // false
console.log(fruits.indexOf("Orange"));  // 2
console.log(fruits.indexOf("Mango"));   // -1
