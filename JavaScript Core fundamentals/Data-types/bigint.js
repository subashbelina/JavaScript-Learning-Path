/*
  BigInt (Primitive)
  --------------------
  Very large integers beyond Number limit. Added in ES2020.
  Immutable — stored by value.
*/

let bigNumber = 9007199254740991n;
let anotherBig = BigInt("9007199254740992");

console.log("--- BigInt ---");
console.log(bigNumber);
console.log(anotherBig);
console.log(typeof bigNumber); // "bigint"
