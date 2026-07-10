/*
  Array.filter()
  --------------
  Creates a new array with items that pass a test.
*/

const scores = [45, 67, 89, 32, 95, 78];

const passed = scores.filter((score) => score >= 60);
const evenNumbers = [1, 2, 3, 4, 5, 6].filter((num) => num % 2 === 0);

console.log("--- filter() ---");
console.log(passed);       // [67, 89, 95, 78]
console.log(evenNumbers);  // [2, 4, 6]
