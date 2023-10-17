class Logger {
  constructor() {}

  log(value) {
    let id = this.#createId();
    console.log(`Calculator: ID${id}: Result ${value}`);
  }

  #createId() {
    const randomId = Math.floor(Math.random() * 1000000);
    return randomId;
  }
}

module.exports = Logger;
