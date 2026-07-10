/*
  Promise Methods
  ---------------
  Work with multiple promises at once.
*/

const example = `
const p1 = Promise.resolve("A");
const p2 = Promise.resolve("B");
const p3 = Promise.reject("Failed");

// Promise.all — wait for all, fail if any fails
Promise.all([p1, p2])
  .then((results) => console.log(results)); // ["A", "B"]

// Promise.allSettled — wait for all, never throws
Promise.allSettled([p1, p3])
  .then((results) => console.log(results));
// [{ status: "fulfilled", value: "A" },
//  { status: "rejected", reason: "Failed" }]

// Promise.race — first to finish wins
Promise.race([p1, p2]).then(console.log); // "A" or "B"

// Promise.any — first success wins (ignores rejections)
Promise.any([p3, p1]).then(console.log); // "A"
`;

console.log("--- Promise Methods ---");
console.log("Promise.all()         → all succeed or fail");
console.log("Promise.allSettled()  → all results, never throws");
console.log("Promise.race()        → first finished");
console.log("Promise.any()         → first success");
console.log("");
console.log("Example:\n", example);
