/*
  Mock Functions
  --------------
  Replace real dependencies (database, API) with fake ones in tests.
*/

const realDatabase = {
  save: (data) => console.log("  [DB] Saved:", data),
};

const mockDatabase = {
  calls: [],
  save(data) {
    this.calls.push(data);
    return { id: 1, ...data };
  },
};

function createTodo(db, title) {
  return db.save({ title, completed: false });
}

console.log("--- Mock Functions ---");
console.log("Real database (slow, needs setup):");
createTodo(realDatabase, "Buy milk");

console.log("");
console.log("Mock database (fast, no real DB needed):");
const result = createTodo(mockDatabase, "Write tests");
console.log("Returned:", result);
console.log("Mock was called:", mockDatabase.calls.length, "time(s)");
console.log("Mock received:", mockDatabase.calls[0]);

// Jest: const mockSave = jest.fn(); mockSave.mockReturnValue({ id: 1 });
