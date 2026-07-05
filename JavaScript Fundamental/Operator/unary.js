/*
  Unary Operators
  ---------------
  Act on a single operand (one value).
  Operators: +  -  typeof  !  void  ++  --
*/

let value = "42";

console.log("--- Unary Operators ---");
console.log(+value);        // 42 — convert to number
console.log(-value);        // -42 — negate
console.log(typeof value);  // "string" — check type
console.log(!true);         // false — logical NOT
console.log(void 0);        // undefined — evaluate and return undefined
