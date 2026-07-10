/*
  Buffer
  ------
  Raw binary data in Node. Used with files, network, and crypto.
*/

const buf = Buffer.from("Node.js");

console.log("--- Buffer ---");
console.log("length:", buf.length);
console.log("utf8:", buf.toString("utf8"));
console.log("hex:", buf.toString("hex"));
console.log("base64:", buf.toString("base64"));

const joined = Buffer.concat([Buffer.from("Hello, "), Buffer.from("Node!")]);
console.log("concat:", joined.toString("utf8"));
