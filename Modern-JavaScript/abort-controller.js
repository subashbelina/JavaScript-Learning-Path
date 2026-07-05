/*
  AbortController
  ---------------
  Cancel fetch requests or other async operations.
  Modern pattern for timeouts and user-cancelled requests.
*/

const example = `
const controller = new AbortController();
const signal = controller.signal;

// Fetch with abort signal
fetch("https://api.example.com/data", { signal })
  .then((res) => res.json())
  .then(console.log)
  .catch((err) => {
    if (err.name === "AbortError") {
      console.log("Request was cancelled");
    }
  });

// Cancel the request
controller.abort();

// Timeout pattern
function fetchWithTimeout(url, ms) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), ms);

  return fetch(url, { signal: controller.signal })
    .finally(() => clearTimeout(timeout));
}
`;

console.log("--- AbortController ---");
console.log("new AbortController()  → create controller");
console.log("controller.signal      → pass to fetch()");
console.log("controller.abort()     → cancel the operation");
console.log("Use for: cancel fetch, timeouts, cleanup");
console.log("");
console.log("Example:\n", example);
