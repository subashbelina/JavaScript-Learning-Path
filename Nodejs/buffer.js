/*
  Buffer
  ------
  Node.js type for raw binary data (bytes), before strings or JSON.

  Note: Read and learn only. Used with files, network, crypto, and streams.
*/

console.log("--- Buffer ---");
console.log("Buffer.from('hello')     — string to bytes");
console.log("Buffer.from([1, 2, 3])   — array to bytes");
console.log("buf.toString('utf8')     — bytes to string");
console.log("buf.toString('hex')      — bytes to hex");
console.log("Buffer.alloc(size)       — zero-filled buffer");
console.log("Buffer.concat([a, b])    — join buffers");

const buf = Buffer.from("Node.js");
console.log("");
console.log("Buffer.from('Node.js'):");
console.log("  length:  ", buf.length);
console.log("  utf8:    ", buf.toString("utf8"));
console.log("  hex:     ", buf.toString("hex"));
console.log("  byte at 0:", buf[0]); // ASCII code for 'N'

const bufferExample = `
const buf = Buffer.from("Hello", "utf8");

// Read/write binary
buf.writeUInt8(72, 0);  // 'H' at index 0

// Compare buffers
Buffer.compare(buf1, buf2) === 0;

// Base64 (common in APIs)
const encoded = buf.toString("base64");
const decoded = Buffer.from(encoded, "base64").toString("utf8");
`;

console.log("");
console.log("Example:\n", bufferExample);
