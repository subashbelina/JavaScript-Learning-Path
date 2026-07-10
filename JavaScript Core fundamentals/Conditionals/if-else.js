/*
  if / else if / else
  -------------------
  Run code based on conditions.
*/

const score = 85;
const userAge = 17;

console.log("--- if / else if / else ---");

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

if (userAge >= 18) {
  console.log("You can vote.");
} else {
  console.log("You cannot vote yet.");
}
