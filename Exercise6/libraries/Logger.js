class Logger {
  constructor() {}

  #generateId() {
    return Math.floor(Math.random() * 10000);
  }

  log(result) {
    console.log(`Calculator: ID${this.#generateId()}: Result ${result}`);
  }
}

module.exports = Logger;
