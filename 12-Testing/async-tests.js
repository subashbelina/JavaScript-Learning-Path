/*
  Async Tests
  -----------
  Test functions that return promises (API calls, database).
*/

function test(name, fn) {
  Promise.resolve()
    .then(fn)
    .then(() => console.log("✓", name))
    .catch((err) => console.log("✗", name, "—", err.message));
}

function expect(actual) {
  return {
    toBe(v) { if (actual !== v) throw new Error(`Expected ${v}, got ${actual}`); },
  };
}

async function fetchTodo(id) {
  return { id, title: "Learn testing", completed: false };
}

console.log("--- Async Tests ---");
test("fetchTodo returns object", async () => {
  const todo = await fetchTodo(1);
  expect(todo.id).toBe(1);
  expect(todo.title).toBe("Learn testing");
});

// Jest: it("fetchTodo", async () => { const todo = await fetchTodo(1); ... });
