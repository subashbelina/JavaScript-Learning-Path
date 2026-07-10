/*
  while Loop
  ----------
  Runs while a condition is true.
*/

console.log("--- while Loop ---");

let count = 1;
while (count <= 3) {
  console.log(`while count: ${count}`);
  count++;
}

let password = "";
while (password !== "1234") {
  password = "1234"; // simulating correct input
  console.log("Password accepted.");
}
