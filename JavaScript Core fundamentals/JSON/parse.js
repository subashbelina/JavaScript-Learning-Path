/*
  JSON.parse()
  ------------
  Convert a JSON string back to a JavaScript object.
*/

const jsonString = '{"userName":"Subash","age":25,"skills":["JS","HTML"]}';

const user = JSON.parse(jsonString);

console.log("--- JSON.parse ---");
console.log(user);
console.log(user.userName);
console.log(Array.isArray(user.skills));
