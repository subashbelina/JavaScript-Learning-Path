/*
  OS Module
  ---------
  Get information about the operating system and machine.
*/

const os = require("os");

console.log("--- OS Module ---");
console.log("platform:", os.platform());
console.log("arch:", os.arch());
console.log("cpus:", os.cpus().length);
console.log("total memory (MB):", Math.round(os.totalmem() / 1024 / 1024));
console.log("free memory (MB):", Math.round(os.freemem() / 1024 / 1024));
console.log("homedir:", os.homedir());
console.log("tmpdir:", os.tmpdir());
