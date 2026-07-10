/*
  Path Module
  -----------
  Build and parse file paths in a cross-platform way.
  Always use path.join() instead of string + "/".
*/

const path = require("path");

const filePath = "/users/subash/projects/app/index.js";

console.log("--- Path Module ---");
console.log(path.join("users", "subash", "app.js"));
console.log(path.resolve("..", "app"));
console.log(path.basename(filePath));   // index.js
console.log(path.dirname(filePath));    // /users/subash/projects/app
console.log(path.extname(filePath));    // .js
console.log(path.parse(filePath));
console.log(path.isAbsolute("/tmp"));   // true
