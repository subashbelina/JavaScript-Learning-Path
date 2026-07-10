/*
  Comparison Operators (8 operators)
  ----------------------------------
  Compare two values and return true or false.
  Operators: ==  ===  !=  !==  >  <  >=  <=
*/

let num1 = 10;
let num2 = "10";

console.log("--- Comparison Operators ---");
console.log(num1 == num2);   // true  — equal (value only)
console.log(num1 === num2);  // false — strict equal (value + type)
console.log(num1 != num2);   // false — not equal
console.log(num1 !== num2);  // true  — strict not equal
console.log(num1 > 5);       // true  — greater than
console.log(num1 < 20);      // true  — less than
console.log(num1 >= 10);     // true  — greater than or equal
console.log(num1 <= 10);     // true  — less than or equal
