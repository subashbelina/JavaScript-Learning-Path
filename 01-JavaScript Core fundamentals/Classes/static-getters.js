/*
  Static Methods & Getters
  ------------------------
  Static — called on the class itself.
  Getter — access property-like values.
*/

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  static createGuest() {
    return new User("Guest", "User");
  }
}

const user = new User("Subash", "Rai");
const guest = User.createGuest();

console.log("--- Static & Getters ---");
console.log(user.fullName);
console.log(guest.fullName);
