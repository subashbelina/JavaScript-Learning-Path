/*
  Arrow Function
  --------------
  Shorter syntax. Does not have its own "this" keyword.
*/

const add = (a, b) => a + b;

const square = (num) => num * num;

const greet = (userName) => {
  return `Hi, ${userName}!`;
};

console.log("--- Arrow Function ---");
console.log(add(10, 5));       // 15
console.log(square(4));        // 16
console.log(greet("Subash"));  // Hi, Subash!
