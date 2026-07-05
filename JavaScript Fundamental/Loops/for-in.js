/*
  for...in Loop
  -------------
  Loop over object keys (property names).
*/

console.log("--- for...in Loop ---");

const person = {
  userName: "Subash",
  age: 25,
  city: "Kathmandu",
};

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
