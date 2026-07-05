/*
  Object Methods
  --------------
  Functions stored inside an object.
*/

const calculator = {
  value: 0,

  add(num) {
    this.value += num;
    return this;
  },

  subtract(num) {
    this.value -= num;
    return this;
  },

  getResult() {
    return this.value;
  },
};

console.log("--- Object Methods ---");
calculator.add(10).subtract(3);
console.log(calculator.getResult()); // 7
