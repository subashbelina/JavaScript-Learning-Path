/*
  Set & Map
  ---------
  Set  — collection of unique values (no duplicates)
  Map  — collection of key-value pairs (any type as key)
*/

const example = `
// Set — unique values only
const skills = new Set(["JS", "HTML", "JS", "CSS"]);
console.log(skills.size);        // 3
console.log(skills.has("JS")); // true
skills.add("React");
skills.delete("HTML");

// Map — key can be any type
const userMap = new Map();
userMap.set("name", "Subash");
userMap.set(1, "ID one");
userMap.set({ id: 2 }, "object key");

console.log(userMap.get("name")); // "Subash"
console.log(userMap.size);        // 3

// Loop Map
for (const [key, value] of userMap) {
  console.log(key, value);
}
`;

console.log("--- Set & Map ---");
console.log("Set  → new Set([...])  — unique items");
console.log("Map  → new Map()       — any key type");
console.log("Better than {} when keys are not strings");
console.log("");
console.log("Example:\n", example);
