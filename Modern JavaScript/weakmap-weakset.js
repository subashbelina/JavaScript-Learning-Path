/*
  WeakMap & WeakSet
  -----------------
  Like Map/Set but keys must be objects and are weakly held.
  Garbage collected when no other references exist — good for caches.
*/

const example = `
// WeakMap — object keys only, not iterable
const cache = new WeakMap();

function processUser(user) {
  if (cache.has(user)) {
    return cache.get(user);
  }
  const result = { processed: user.name.toUpperCase() };
  cache.set(user, result);
  return result;
}

// WeakSet — store objects, check membership
const loggedInUsers = new WeakSet();

function login(user) {
  loggedInUsers.add(user);
}

function isLoggedIn(user) {
  return loggedInUsers.has(user);
}

// When user object is deleted → auto removed from WeakMap/WeakSet
`;

console.log("--- WeakMap & WeakSet ---");
console.log("WeakMap → object keys, auto garbage collected");
console.log("WeakSet → unique objects, auto garbage collected");
console.log("Not iterable — no .size, no for...of");
console.log("Use for: private data, caches tied to object lifetime");
console.log("");
console.log("Example:\n", example);
