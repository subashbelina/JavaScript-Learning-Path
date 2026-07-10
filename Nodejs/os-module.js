/*
  OS Module
  ---------
  Get information about the operating system and machine.

  Note: Read and learn only. Useful for logging, diagnostics, and CLI tools.
*/

const os = require("os");

console.log("--- OS Module ---");
console.log("os.platform()     →", os.platform());
console.log("os.arch()         →", os.arch());
console.log("os.hostname()     →", os.hostname());
console.log("os.type()         →", os.type());
console.log("os.release()      →", os.release());
console.log("os.cpus().length  →", os.cpus().length, "CPU cores");
console.log("os.totalmem()     →", Math.round(os.totalmem() / 1024 / 1024), "MB");
console.log("os.freemem()      →", Math.round(os.freemem() / 1024 / 1024), "MB free");
console.log("os.homedir()      →", os.homedir());
console.log("os.tmpdir()       →", os.tmpdir());
console.log("os.uptime()       →", Math.round(os.uptime()), "seconds");

const osExample = `
const os = require("os");

console.log(\`\${os.type()} \${os.release()} on \${os.arch()}\`);
console.log(\`Memory: \${(os.freemem() / os.totalmem() * 100).toFixed(1)}% free\`);

// Network interfaces (Wi-Fi, Ethernet IPs)
const nets = os.networkInterfaces();
`;

console.log("");
console.log("Example:\n", osExample);
