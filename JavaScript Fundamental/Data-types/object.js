/*
  Object (Non-Primitive)
  ----------------------
  Collection of key-value pairs. Mutable — stored by reference.
*/

let person = {
  firstName: "Subash",
  age: 25,
  isDeveloper: true,
};

person.city = "Kathmandu"; // can add new properties

console.log("--- Object ---");
console.log(person);
console.log(typeof person); // "object"
