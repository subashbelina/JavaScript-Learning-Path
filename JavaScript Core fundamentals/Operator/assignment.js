/*
  Assignment Operators (12 operators)
  -----------------------------------
  Used to store or update values in variables.
  Operators: =  +=  -=  *=  /=  %=  **=  &&=  ||=  ??=
*/

let x = 5;

console.log("--- Assignment Operators ---");
console.log((x = 10));     // 10 — assign
console.log((x += 2));     // 12 — add and assign
console.log((x -= 3));     // 9  — subtract and assign
console.log((x *= 2));     // 18 — multiply and assign
console.log((x /= 3));     // 6  — divide and assign
console.log((x %= 4));     // 2  — modulus and assign
console.log((x **= 3));    // 8  — exponent and assign
console.log((x &&= 1));    // 1  — logical AND assign
console.log((x ||= 5));    // 1  — logical OR assign
console.log((x ??= null)); // 1  — nullish coalescing assign
