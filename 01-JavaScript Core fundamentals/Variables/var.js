/*
  var (Legacy)
  ------------
  Old way to declare variables. Function scoped, can cause bugs.
  Prefer let and const in modern JavaScript.
*/

function example() {
  if (true) {
    var message = "Hello";
  }
  console.log(message); // works — var is not block scoped
}

example();

console.log("--- var ---");
var count = 1;
var count = 2; // can redeclare — avoid this
console.log(count);
