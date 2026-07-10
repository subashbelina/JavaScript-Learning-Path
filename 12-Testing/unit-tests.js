/*
  Unit Tests
  ----------
  Test one function at a time with different inputs.
*/

function test(name, fn) {
  try { fn(); console.log("✓", name); }
  catch (err) { console.log("✗", name, "—", err.message); }
}

function expect(actual) {
  return {
    toBe(v) { if (actual !== v) throw new Error(`Expected ${v}, got ${actual}`); },
  };
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function isValidEmail(email) {
  return email.includes("@") && email.includes(".");
}

console.log("--- Unit Tests ---");
test("capitalizes first letter", () => expect(capitalize("hello")).toBe("Hello"));
test("handles empty string", () => expect(capitalize("")).toBe(""));
test("valid email passes", () => expect(isValidEmail("a@b.com")).toBe(true));
test("invalid email fails", () => expect(isValidEmail("invalid")).toBe(false));
