/*
  Mini Test Runner
  ----------------
  How expect() and test() work — same idea as Jest.
*/

function test(name, fn) {
  try {
    fn();
    console.log("✓", name);
  } catch (err) {
    console.log("✗", name, "—", err.message);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`Expected ${expected}, got ${actual}`);
      }
    },
    toEqual(expected) {
      if (JSON.stringify(actual) !== JSON.stringify(expected)) {
        throw new Error(`Expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
      }
    },
  };
}

function add(a, b) {
  return a + b;
}

console.log("--- Mini Test Runner ---");
test("add(2, 3) returns 5", () => expect(add(2, 3)).toBe(5));
test("add(0, 0) returns 0", () => expect(add(0, 0)).toBe(0));
test("add(1, 1) returns 3 (fails)", () => expect(add(1, 1)).toBe(3));
