/*
  CommonJS Modules
  ----------------
  Node's original module system.
  require() loads a module, module.exports shares code from a file.
*/

const path = require("path");
const { join, basename, extname } = require("path");

console.log("--- CommonJS Modules ---");
console.log(join("users", "subash", "app.js"));       // users/subash/app.js
console.log(basename("/home/app/index.js"));           // index.js
console.log(extname("photo.png"));                     // .png

// In another file you would write:
// module.exports = { add, multiply };
// const { add } = require("./math.js");
