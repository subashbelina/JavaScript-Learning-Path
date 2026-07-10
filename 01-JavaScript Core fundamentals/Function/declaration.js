/*
  Function Declaration
  --------------------
  Created with the function keyword. Can be called before it is defined (hoisted).
*/

console.log("--- Function Declaration ---");
console.log(greet("Subash")); // works before definition (hoisting)

function greet(userName) {
  return `Hello, ${userName}!`;
}

console.log(greet("Rai"));
