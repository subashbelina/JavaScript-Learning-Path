/*
  Higher-Order Function
  ---------------------
  A function that takes another function as an argument
  or returns a function.
*/

function createMultiplier(factor) {
  return function (num) {
    return num * factor;
  };
}

function applyOperation(a, b, operation) {
  return operation(a, b);
}

const double = createMultiplier(2);
const add = (x, y) => x + y;

console.log("--- Higher-Order Function ---");
console.log(double(5));                    // 10
console.log(applyOperation(8, 3, add));    // 11

// built-in higher-order methods
const scores = [70, 85, 90, 60];
console.log(scores.filter((score) => score >= 80)); // [85, 90]
console.log(scores.map((score) => score + 5));     // [75, 90, 95, 65]
