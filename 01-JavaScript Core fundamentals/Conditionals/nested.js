/*
  Nested & Combined Conditions
  ----------------------------
  Using &&, ||, and nested if statements.
*/

const isLoggedIn = true;
const hasSubscription = false;
const userRole = "admin";

console.log("--- Nested & Combined ---");

if (isLoggedIn && hasSubscription) {
  console.log("Show premium content.");
} else if (isLoggedIn) {
  console.log("Show free content.");
} else {
  console.log("Please log in.");
}

if (userRole === "admin" || userRole === "moderator") {
  console.log("Access to dashboard granted.");
}
