/*
  Callback Function
  -----------------
  A function passed as an argument to another function.
*/

function processUser(userName, callback) {
  console.log(`Processing ${userName}...`);
  callback(userName);
}

function showWelcome(userName) {
  console.log(`Welcome, ${userName}!`);
}

console.log("--- Callback Function ---");
processUser("Subash", showWelcome);

// callback with arrow function
processUser("Rai", (userName) => {
  console.log(`Good to see you, ${userName}!`);
});
