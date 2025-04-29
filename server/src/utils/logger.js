import winston from "winston";

const { createLogger, format, transports } = winston;

const { combine, timestamp, printf, colorize } = format;
const customFormat = printf(({ level, message, timestamp }) => {
  return `[${timestamp}] [${level.toUpperCase()}]: ${message}`;
});

const logger = createLogger({
  level: "info",
  format: combine(timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), customFormat),
  transports: [
    new transports.Console({
      format: combine(colorize(), customFormat),
    }),
    new transports.File({
      filename: "logs/combined.log",
    }),
  ],
});

if (process.env.NODE_ENV === "production") {
  logger.add(
    new transports.File({
      filename: "logs/productions.log",
      level: "info",
    })
  );
}

const requestLogger = (req, res, next) => {
  logger.info(`HTTP${req.method} ${req.url}`);
  next();
};

export { logger, requestLogger };
