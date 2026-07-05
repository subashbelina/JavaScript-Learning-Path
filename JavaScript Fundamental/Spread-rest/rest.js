/*
  Rest Parameters & Rest in Destructuring
  ---------------------------------------
  Collect remaining items into an array.
*/

function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

const [first, ...others] = [10, 20, 30, 40];

console.log("--- Rest ---");
console.log(sumAll(1, 2, 3, 4, 5)); // 15
console.log(first);  // 10
console.log(others); // [20, 30, 40]
