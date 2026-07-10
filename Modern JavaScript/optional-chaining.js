/*
  Optional Chaining (?.) & Nullish Coalescing (??)
  ------------------------------------------------
  ?.  — safely access nested properties (no error if null/undefined)
  ??  — default value only for null or undefined (not 0 or "")
*/

const example = `
const user = {
  name: "Subash",
  address: { city: "Kathmandu" },
};

// Optional chaining
console.log(user?.name);           // "Subash"
console.log(user?.phone?.number);  // undefined (no crash)
console.log(user?.address?.city);  // "Kathmandu"

// Nullish coalescing
const count = 0;
console.log(count || 10);   // 10  — || treats 0 as falsy
console.log(count ?? 10);   // 0   — ?? only replaces null/undefined

const nickname = null;
console.log(nickname ?? "Guest");  // "Guest"
`;

console.log("--- ?. and ?? ---");
console.log("?.  → safe access:  obj?.prop?.nested");
console.log("??  → default:     value ?? 'fallback'");
console.log("Use ?? instead of || when 0 or '' are valid values");
console.log("");
console.log("Example:\n", example);
