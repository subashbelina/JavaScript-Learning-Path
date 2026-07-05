/*
  Access & Update Objects
  -----------------------
  Dot notation and bracket notation.
*/

const user = {
  userName: "Subash",
  age: 25,
  "favorite-language": "JavaScript",
};

console.log("--- Access & Update ---");
console.log(user.userName);                  // dot notation
console.log(user["favorite-language"]);      // bracket notation

user.age = 26;
user.email = "subash@example.com";           // add new property
delete user.city;                            // safe even if missing

console.log(user);
