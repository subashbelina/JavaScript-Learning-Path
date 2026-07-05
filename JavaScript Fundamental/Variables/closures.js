/*
  Closures
  --------
  A function that remembers variables from its outer scope.
*/

function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();

console.log("--- Closures ---");
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
