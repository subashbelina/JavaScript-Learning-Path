/*
  Import Syntax
  -------------
  Bring exports from other files into the current file.
*/

const importExample = `
// main.js — importing from other files

import greet from "./greet.js";                    // default import
import { PI, add, multiply } from "./math.js";    // named imports

console.log(greet("Subash"));
console.log(PI);
console.log(add(4, 6));
console.log(multiply(3, 7));

// Rename while importing
import { add as sum } from "./math.js";

// Import everything as an object
import * as math from "./math.js";
console.log(math.PI);
console.log(math.add(2, 3));
`;

console.log("--- Import Syntax ---");
console.log("Default:  import name from './file.js'");
console.log("Named:    import { a, b } from './file.js'");
console.log("Rename:   import { a as b } from './file.js'");
console.log("All:      import * as obj from './file.js'");
console.log("");
console.log("Example:\n", importExample);
