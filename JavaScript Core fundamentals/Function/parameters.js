/*
  Parameters & Arguments
  ----------------------
  Parameters — names listed in the function definition.
  Arguments  — actual values passed when calling the function.
*/

function showProfile(userName, age, city = "Kathmandu") {
  console.log(`Name: ${userName}, Age: ${age}, City: ${city}`);
}

function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log("--- Parameters & Arguments ---");
showProfile("Subash", 25);              // default city used
showProfile("Rai", 30, "Pokhara");       // custom city passed
console.log(sumAll(1, 2, 3, 4, 5));     // 15 — rest parameter (...)
