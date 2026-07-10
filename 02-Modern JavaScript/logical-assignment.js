/*
  Logical Assignment (ES2021)
  ---------------------------
  Combine logical operators with assignment.
*/

const example = `
let a = 0;
let b = "";
let c = null;

// &&= — assign only if left side is truthy
a &&= 10;   // a stays 0 (0 is falsy)
a = 5;
a &&= 10;   // a becomes 10

// ||= — assign only if left side is falsy
b ||= "default";  // b becomes "default"

// ??= — assign only if left side is null or undefined
c ??= "fallback"; // c becomes "fallback"
let d = 0;
d ??= 10;         // d stays 0 (0 is not null/undefined)
`;

console.log("--- Logical Assignment ---");
console.log("x &&= y  → assign y if x is truthy");
console.log("x ||= y  → assign y if x is falsy");
console.log("x ??= y  → assign y if x is null/undefined");
console.log("");
console.log("Example:\n", example);
