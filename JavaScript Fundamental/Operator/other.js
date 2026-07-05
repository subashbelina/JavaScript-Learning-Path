/*
  Other Useful Operators
  ----------------------
  Extra operators used often in modern JavaScript.
  Operators: in  instanceof  ??  ?.
  (Spread/rest is in the Spread-rest folder)
*/

let user = { firstName: "Subash", age: 25 };
let skills = ["JavaScript", "HTML", "CSS"];
let nickname = null;

console.log("--- Other Operators ---");
console.log("firstName" in user);       // true  — in (check property)
console.log(skills instanceof Array);   // true  — instanceof (check type)
console.log(nickname ?? "Guest");       // "Guest" — nullish coalescing (??)
console.log(user?.firstName);           // "Subash" — optional chaining (?.)
