/*
  Array.slice() & splice()
  ------------------------
  slice  — copy part of array (does not change original)
  splice — add/remove items (changes original)
*/

const colors = ["Red", "Green", "Blue", "Yellow", "Purple"];

const sliced = colors.slice(1, 4); // index 1 up to (not including) 4

const items = ["A", "B", "C", "D"];
items.splice(2, 1, "X", "Y"); // at index 2, remove 1, add "X", "Y"

console.log("--- slice() & splice() ---");
console.log(sliced); // ["Green", "Blue", "Yellow"]
console.log(colors); // original unchanged
console.log(items);  // ["A", "B", "X", "Y", "D"]
