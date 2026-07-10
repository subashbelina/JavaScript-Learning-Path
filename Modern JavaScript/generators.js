/*
  Generators (function*)
  ----------------------
  Functions that can pause and resume.
  yield returns a value and pauses; next() resumes.
*/

const example = `
function* idGenerator() {
  let id = 1;
  while (true) {
    yield id;
    id++;
  }
}

const gen = idGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3

// yield* — delegate to another generator
function* letters() {
  yield "A";
  yield "B";
}

function* combined() {
  yield* letters();
  yield "C";
}

// Infinite sequence
function* fibonacci() {
  let a = 0, b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}
`;

console.log("--- Generators ---");
console.log("function* name()  → generator function");
console.log("yield value       → pause and return value");
console.log("gen.next()        → resume, get { value, done }");
console.log("Use for: lazy sequences, iterators, async patterns");
console.log("");
console.log("Example:\n", example);
