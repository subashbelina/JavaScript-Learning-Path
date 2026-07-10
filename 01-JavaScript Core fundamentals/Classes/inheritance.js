/*
  Class Inheritance
  -----------------
  A child class extends a parent class.
*/

class Animal {
  constructor(userName) {
    this.userName = userName;
  }

  speak() {
    return `${this.userName} makes a sound.`;
  }
}

class Dog extends Animal {
  speak() {
    return `${this.userName} barks!`;
  }
}

const dog = new Dog("Buddy");

console.log("--- Inheritance ---");
console.log(dog.speak());
