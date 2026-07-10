/*
  try / catch / finally
  ---------------------
  Handle errors without crashing the program.
*/

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

console.log("--- try / catch / finally ---");

try {
  console.log(divide(10, 2)); // 5
  console.log(divide(10, 0)); // throws error
} catch (error) {
  console.error("Error caught:", error.message);
} finally {
  console.log("This always runs.");
}
