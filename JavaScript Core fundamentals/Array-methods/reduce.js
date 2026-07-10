/*
  Array.reduce()
  --------------
  Reduces an array to a single value.
*/

const prices = [100, 250, 75, 300];

const total = prices.reduce((sum, price) => sum + price, 0);
const maxScore = [10, 45, 23, 67].reduce(
  (max, num) => (num > max ? num : max),
  0
);

console.log("--- reduce() ---");
console.log(total);     // 725
console.log(maxScore);  // 67
