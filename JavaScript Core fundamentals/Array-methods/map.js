/*
  Array.map()
  -----------
  Creates a new array by transforming each item.
*/

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((num) => num * 2);
const names = ["subash", "rai"];
const capitalized = names.map((userName) => userName.toUpperCase());

console.log("--- map() ---");
console.log(doubled);      // [2, 4, 6, 8, 10]
console.log(capitalized);  // ["SUBASH", "RAI"]
console.log(numbers);      // original unchanged
