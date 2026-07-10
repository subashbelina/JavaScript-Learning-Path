/*
  Return Values
  -------------
  Functions can send a result back using the return keyword.
  Without return, a function returns undefined.
*/

function add(a, b) {
  return a + b;
}

function sayHello(userName) {
  console.log(`Hello, ${userName}!`);
  // no return — result is undefined
}

console.log("--- Return Values ---");
console.log(add(8, 2));           // 10
console.log(sayHello("Subash"));  // logs message, returns undefined
