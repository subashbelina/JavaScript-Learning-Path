/*
  this Keyword in Objects
  -----------------------
  "this" refers to the current object.
*/

const profile = {
  userName: "Subash",
  role: "Developer",

  introduce() {
    return `Hi, I am ${this.userName}, a ${this.role}.`;
  },
};

console.log("--- this Keyword ---");
console.log(profile.introduce());
