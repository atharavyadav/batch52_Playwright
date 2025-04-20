const { createLogger, format, transports } = require("winston");
const { combine, timestamp, printf } = format;

// Define the log format
const logFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level.toUpperCase()}]: ${message}`;
});

// Create the logger
const logger = createLogger({
    level: "info", // Set the minimum log level
    format: combine(
        timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        logFormat
    ),
    transports: [
        new transports.Console(), // Log to console
        new transports.File({ filename: "execution.log" }) // Log to a file
    ],
});

module.exports = logger;