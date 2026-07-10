/*
  Parallel async / await
  ----------------------
  Run multiple async tasks at the same time with Promise.all.
*/

function task(label, ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`${label} finished`), ms);
  });
}

async function runParallel() {
  console.log("--- Parallel await ---");

  const results = await Promise.all([
    task("Task A", 400),
    task("Task B", 200),
    task("Task C", 300),
  ]);

  console.log(results);
}

runParallel();
