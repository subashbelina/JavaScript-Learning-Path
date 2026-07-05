/*
  ES6 Classes — Basics
  --------------------
  Blueprint for creating objects with shared behavior.
*/

class Person {
  constructor(userName, age) {
    this.userName = userName;
    this.age = age;
  }

  greet() {
    return `Hello, I am ${this.userName}, age ${this.age}.`;
  }
}

const person = new Person("Subash", 25);

console.log("--- Classes ---");
console.log(person.greet());
console.log(person instanceof Person);
