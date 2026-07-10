/*
  Function Expression
  -------------------
  A function stored in a variable. Not hoisted — must be defined before use.
*/

const multiply = function (a, b) {
  return a * b;
};

console.log("--- Function Expression ---");
console.log(multiply(4, 5)); // 20
console.log(typeof multiply); // "function"
