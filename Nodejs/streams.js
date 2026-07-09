/*
  Streams
  -------
  Process data piece by piece instead of loading everything into memory.

  Types:
    - Readable  — read data (fs.createReadStream)
    - Writable  — write data (fs.createWriteStream)
    - Duplex    — both read and write
    - Transform — modify data while streaming (zlib, crypto)

  Note: Read and learn only. Great for large files, uploads, and logs.
*/

const streamsExample = `
const fs = require("fs");
const { pipeline } = require("stream/promises");

// --- Read file as stream ---
const readStream = fs.createReadStream("large-file.txt", "utf8");

readStream.on("data", (chunk) => {
  console.log("Chunk:", chunk.length, "bytes");
});

readStream.on("end", () => console.log("Done reading"));

// --- Pipe: read → write (efficient copy) ---
const writeStream = fs.createWriteStream("copy.txt");
readStream.pipe(writeStream);

// --- Modern: pipeline with promises (handles errors) ---
await pipeline(
  fs.createReadStream("input.txt"),
  fs.createWriteStream("output.txt")
);
`;

console.log("--- Streams ---");
console.log("fs.createReadStream(path)   — read in chunks");
console.log("fs.createWriteStream(path)  — write in chunks");
console.log("readable.pipe(writable)     — connect streams");
console.log("stream/promises.pipeline()  — safe async piping");
console.log("");
console.log("Example:\n", streamsExample);
