/*
  Union Types
  -----------
  A value can be one of several types.
*/

/**
 * @param {string | number} id
 * @returns {string}
 */
function formatId(id) {
  return `ID: ${id}`;
}

/**
 * @param {"success" | "error" | "loading"} status
 */
function showStatus(status) {
  console.log("Status:", status);
}

console.log("--- Union Types ---");
console.log(formatId(42));
console.log(formatId("abc-123"));
showStatus("success");
showStatus("loading");

// TypeScript:
// function formatId(id: string | number): string { ... }
// type Status = "success" | "error" | "loading";
