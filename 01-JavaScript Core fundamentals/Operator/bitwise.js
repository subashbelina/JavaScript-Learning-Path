/*
  Bitwise Operators (6 operators)
  -------------------------------
  Work on the binary bits of numbers.
  Operators: &  |  ^  ~  <<  >>
*/

let p = 5;  // 0101 in binary
let q = 3;  // 0011 in binary

console.log("--- Bitwise Operators ---");
console.log(p & q);   // 1  — AND
console.log(p | q);   // 7  — OR
console.log(p ^ q);   // 6  — XOR
console.log(~p);      // -6 — NOT
console.log(p << 1);  // 10 — left shift
console.log(p >> 1);  // 2  — right shift
