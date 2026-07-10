/*
  Scope
  -----
  Where a variable can be accessed in your code.
*/

const globalVar = "I am global";

function outer() {
  const outerVar = "I am in outer";

  function inner() {
    const innerVar = "I am in inner";
    console.log(globalVar);
    console.log(outerVar);
    console.log(innerVar);
  }

  inner();
}

console.log("--- Scope ---");
outer();
