/*
  IIFE — Immediately Invoked Function Expression
  ----------------------------------------------
  A function that runs as soon as it is defined.
  Useful for creating a private scope.
*/

console.log("--- IIFE ---");

(function () {
  const secretCode = "JS-2026";
  console.log(`Code inside IIFE: ${secretCode}`);
})();

// secretCode is not accessible here — private to the IIFE

(function greet(userName) {
  console.log(`Hello from IIFE, ${userName}!`);
})("Subash");
