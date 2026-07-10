/*
  Array.find() & findIndex()
  --------------------------
  find()      — returns the first matching item
  findIndex() — returns the index of the first match
*/

const users = [
  { id: 1, userName: "Subash" },
  { id: 2, userName: "Rai" },
  { id: 3, userName: "Dev" },
];

const found = users.find((user) => user.id === 2);
const index = users.findIndex((user) => user.userName === "Dev");

console.log("--- find() & findIndex() ---");
console.log(found);  // { id: 2, userName: "Rai" }
console.log(index);  // 2
