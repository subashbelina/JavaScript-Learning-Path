/*
  Top-Level Await
  ---------------
  Use await at the top of a module (outside any async function).
  Module waits until promise resolves before exporting.
  Requires ES modules ("type": "module" in real projects).
*/

const example = `
// data.js — top-level await in a module

const response = await fetch("https://api.example.com/users");
const users = await response.json();

export default users;

// main.js — imports after data.js finishes loading
import users from "./data.js";
console.log(users);
`;

console.log("--- Top-Level Await ---");
console.log("await at module top level — no async function wrapper");
console.log("Module pauses until promise resolves");
console.log("Only works in ES modules (.js with type: module)");
console.log("");
console.log("Example:\n", example);
