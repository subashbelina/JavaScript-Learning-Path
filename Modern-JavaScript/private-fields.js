/*
  Private Class Fields (#)
  ------------------------
  Truly private properties — not accessible outside the class.
  Added in ES2022.
*/

const example = `
class BankAccount {
  #balance = 0;  // private — only inside this class

  deposit(amount) {
    if (amount > 0) this.#balance += amount;
  }

  withdraw(amount) {
    if (amount <= this.#balance) this.#balance -= amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(1000);
console.log(account.getBalance()); // 1000
// console.log(account.#balance);  // SyntaxError — private!
`;

console.log("--- Private Fields ---");
console.log("#fieldName  → truly private class property");
console.log("Cannot access from outside the class");
console.log("Use # for internal state, public methods for access");
console.log("");
console.log("Example:\n", example);
