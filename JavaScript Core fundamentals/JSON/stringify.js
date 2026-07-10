/*
  JSON.stringify()
  ----------------
  Convert a JavaScript object to a JSON string.
*/

const user = {
  id: 1,
  userName: "Subash",
  skills: ["JavaScript", "HTML"],
  active: true,
};

const jsonString = JSON.stringify(user, null, 2);

console.log("--- JSON.stringify ---");
console.log(jsonString);
console.log(typeof jsonString); // "string"
