/*
  Generics
  --------
  Reusable types that work with any data type.
*/

/**
 * @template T
 * @param {T} value
 * @returns {T[]}
 */
function wrapInArray(value) {
  return [value];
}

/**
 * @template T
 * @param {T[]} items
 * @returns {T | undefined}
 */
function first(items) {
  return items[0];
}

console.log("--- Generics ---");
console.log(wrapInArray("hello"));   // ["hello"]
console.log(wrapInArray(42));         // [42]
console.log(first(["a", "b", "c"])); // "a"
console.log(first([10, 20]));        // 10

// TypeScript:
// function wrapInArray<T>(value: T): T[] { return [value]; }
// function first<T>(items: T[]): T | undefined { return items[0]; }
