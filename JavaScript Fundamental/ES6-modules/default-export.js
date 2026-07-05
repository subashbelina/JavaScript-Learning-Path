/*
  Default Export
  --------------
  Export one main value from a file.
  Import without curly braces — any name works.
*/

const defaultExportExample = `
// greet.js — default export

export default function greet(userName) {
  return \`Hello, \${userName}!\`;
}

// Only ONE default export per file
`;

console.log("--- Default Export ---");
console.log("Use when a file has one main thing to export");
console.log("Syntax: export default functionName");
console.log("Import: import anyName from './file.js'");
console.log("");
console.log("Example:\n", defaultExportExample);
