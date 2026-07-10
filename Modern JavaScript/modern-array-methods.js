/*
  Modern Array Methods (ES2022–2023)
  -----------------------------------
  New non-mutating array methods — return new arrays, keep original unchanged.
*/

const example = `
const nums = [3, 1, 4, 1, 5];

// ES2022
nums.at(-1);        // 5   — last item (negative index)
nums.at(0);         // 3   — first item

// ES2023 — non-mutating (original array unchanged)
nums.toSorted();    // [1, 1, 3, 4, 5]
nums.toReversed();  // [5, 1, 4, 1, 3]
nums.with(2, 99);   // [3, 1, 99, 1, 5] — replace at index

// find from end
[1, 2, 3, 4, 3].findLast((n) => n === 3);      // 3
[1, 2, 3, 4, 3].findLastIndex((n) => n === 3); // 4

// flat & flatMap (ES2019)
[1, [2, 3], [4]].flat();           // [1, 2, 3, 4]
[1, 2, 3].flatMap((n) => [n, n * 2]); // [1, 2, 2, 4, 3, 6]
`;

console.log("--- Modern Array Methods ---");
console.log(".at(-1)        → item from end");
console.log(".toSorted()    → sorted copy (no mutate)");
console.log(".toReversed()  → reversed copy");
console.log(".with(i, val)  → copy with one item changed");
console.log(".findLast()    → find from end");
console.log("");
console.log("Example:\n", example);
