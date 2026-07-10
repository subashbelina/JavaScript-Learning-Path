/*
  Symbol (Primitive)
  ------------------
  Unique identifier. Added in ES6. Immutable — stored by value.
*/

let id = Symbol("user-id");
let anotherId = Symbol("user-id");

console.log("--- Symbol ---");
console.log(id);
console.log(id === anotherId); // false — every symbol is unique
console.log(typeof id);        // "symbol"
