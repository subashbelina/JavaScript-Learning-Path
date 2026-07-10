/*
  Array.forEach()
  ---------------
  Runs a function for each item. Does not return a new array.
*/

const fruits = ["Apple", "Banana", "Orange"];

console.log("--- forEach() ---");
fruits.forEach((fruit, index) => {
  console.log(`${index + 1}. ${fruit}`);
});
