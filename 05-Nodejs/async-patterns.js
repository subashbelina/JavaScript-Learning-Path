/*
  Async Patterns in Node.js
  -------------------------
  Node I/O is async. Three styles: callbacks, promises, async/await.
*/

function fetchUser() {
  return Promise.resolve({ id: 1, userName: "Subash" });
}

// Promise chain
fetchUser()
  .then((user) => console.log("Promise:", user))
  .catch((err) => console.error(err));

// async/await (recommended)
async function showUser() {
  console.log("--- Async Patterns in Node.js ---");
  const user = await fetchUser();
  console.log("async/await:", user);

  const [a, b] = await Promise.all([
    Promise.resolve("first"),
    Promise.resolve("second"),
  ]);
  console.log("Promise.all:", a, b);
}

showUser();
