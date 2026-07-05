/*
  Array (Non-Primitive)
  ---------------------
  Ordered list of values. Arrays are special objects.
  Mutable — stored by reference.
*/

let fruits = ["Apple", "Banana", "Orange", "Grape"];

fruits.push("Mango"); // can add items

console.log("--- Array ---");
console.log(fruits);
console.log(typeof fruits); // "object"
console.log(Array.isArray(fruits)); // true
