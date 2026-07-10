/*
  Async Error Handling
  --------------------
  Use try/catch with async/await.
*/

async function fetchData() {
  throw new Error("Server is down");
}

async function loadData() {
  console.log("--- Async Error Handling ---");

  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error("Async error:", error.message);
  }
}

loadData();
