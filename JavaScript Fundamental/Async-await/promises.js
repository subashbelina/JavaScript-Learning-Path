/*
  Promises
  --------
  A Promise represents a value that will be available in the future.
*/

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Done after ${ms}ms`), ms);
  });
}

console.log("--- Promises ---");

wait(500)
  .then((message) => {
    console.log(message);
    return wait(300);
  })
  .then((message) => console.log(message))
  .catch((error) => console.error(error));
