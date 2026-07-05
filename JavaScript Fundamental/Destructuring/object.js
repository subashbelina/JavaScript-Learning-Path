/*
  Object Destructuring
  --------------------
  Extract properties from objects into variables.
*/

const user = {
  userName: "Subash",
  age: 25,
  city: "Kathmandu",
};

const { userName, age } = user;
const { city: location } = user; // rename while destructuring

console.log("--- Object Destructuring ---");
console.log(userName, age);
console.log(location);

function showUser({ userName, age }) {
  console.log(`${userName} is ${age} years old.`);
}

showUser(user);
