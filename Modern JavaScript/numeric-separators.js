/*
  Numeric Separators & Object.hasOwn
  ------------------------------------
  ES2021 — readable large numbers with underscores.
  ES2022 — Object.hasOwn() replaces hasOwnProperty.
*/

const example = `
// Numeric separators — easier to read large numbers
const billion = 1_000_000_000;
const binary  = 0b1010_0001;
const hex     = 0xFF_EC_DE_5E;
const bytes   = 1_024;  // same as 1024

console.log(billion); // 1000000000

// Object.hasOwn — check own property (safer than hasOwnProperty)
const user = { name: "Subash", age: 25 };

Object.hasOwn(user, "name");     // true
Object.hasOwn(user, "toString"); // false (inherited, not own)

// structuredClone — deep copy (ES2022)
const original = { a: 1, nested: { b: 2 } };
const copy = structuredClone(original);
copy.nested.b = 99;
console.log(original.nested.b); // 2 — unchanged
`;

console.log("--- Numeric Separators & Utilities ---");
console.log("1_000_000     → readable numbers");
console.log("Object.hasOwn(obj, key)  → own property check");
console.log("structuredClone(obj)       → deep copy");
console.log("");
console.log("Example:\n", example);
