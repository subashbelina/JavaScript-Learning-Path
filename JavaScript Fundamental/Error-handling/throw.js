/*
  throw Error
  -----------
  Manually create and throw errors.
*/

function setAge(age) {
  if (typeof age !== "number") {
    throw new TypeError("Age must be a number");
  }
  if (age < 0) {
    throw new RangeError("Age cannot be negative");
  }
  return age;
}

console.log("--- throw Error ---");

try {
  console.log(setAge(25));
  console.log(setAge(-5));
} catch (error) {
  console.error(`${error.name}: ${error.message}`);
}
