/*
  Jest Setup
  ----------
  How to add Jest to a real project in practice/.
*/

console.log("--- Jest Setup ---");
console.log("");
console.log("Install:");
console.log("  npm install --save-dev jest");
console.log("");
console.log("package.json:");
console.log('  "scripts": { "test": "jest" }');
console.log("");
console.log("Run tests:");
console.log("  npm test");
console.log("");
console.log("Example test file (todos.test.js):");
console.log(`
  const { add } = require("./math");

  test("adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });
`);
