const Logger = require("./logger");

const logger = new Logger();

logger.on("message", (data) => console.log("Called the listener", data));

logger.log("This is a new message");
