const EventEmitter = require("events");

const uuid = require("uuid").v4;

class Logger extends EventEmitter {
  log(msg) {
    this.emit("message", { id: uuid(), msg });
  }
}

module.exports = Logger;
