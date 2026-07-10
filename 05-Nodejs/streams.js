/*
  Streams
  -------
  Process data in chunks instead of loading everything into memory.
*/

const { Readable } = require("stream");

const readable = Readable.from(["chunk-1", "chunk-2", "chunk-3"]);

console.log("--- Streams ---");

readable.on("data", (chunk) => {
  console.log("data:", chunk);
});

readable.on("end", () => {
  console.log("end: done reading");
});
