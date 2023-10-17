const Logger = require("./Logger");
let logging = new Logger();

class Calculator {
  constructor() {
    // this.id = Math.floor(Math.random() * 10000);
  }

  //=====LINE10-13, 16, 23,30,40 were Part2. Commented due to Part3.
  //   #log = (value) => {
  //     console.log(`Calculator: ID${this.id}: ${value}`);
  //   };

  add(num1, num2) {
    const value = num1 + num2;
    // this.#log(`Addition: ${value}`);
    logging.log(value);
    return value;
  }

  subtract(num1, num2) {
    const value = num1 - num2;
    // this.#log(`Subtraction: ${value}`);
    logging.log(value);
    return value;
  }

  multiply(num1, num2) {
    const value = num1 * num2;
    // this.#log(`Multiplication: ${value}`);
    logging.log(value);
    return value;
  }

  divide(num1, num2) {
    let value = num1 / num2;
    if (num2 === 0) {
      value = num1;
    }
    // this.#log(`Division: ${value}`);
    logging.log(value);
    return value;
  }
}

module.exports = Calculator;
