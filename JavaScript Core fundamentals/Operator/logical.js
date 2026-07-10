/*
  Logical Operators (3 operators)
  -------------------------------
  Used to combine or invert boolean conditions.
  Operators: &&  ||  !
*/

let isLoggedIn = true;
let hasPermission = false;

console.log("--- Logical Operators ---");
console.log(isLoggedIn && hasPermission); // false — AND (both must be true)
console.log(isLoggedIn || hasPermission); // true  — OR (at least one true)
console.log(!isLoggedIn);                 // false — NOT (flip true/false)
