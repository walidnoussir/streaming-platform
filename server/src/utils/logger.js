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
  logger.info(`HTTP${req.mehtod} ${req.url}`);
  next();
};

export { logger, requestLogger };

// => app.js
import { requestLogger } from "logger.js";

app.use(requestLogger);
//

// => auth

import { logger } from "logger.js";

export const login = async (req, res) => {
  try {
    const { password, email } = req.body;

    const user = await User.findOne({ email });

    const isValidUser =
      user && (await comparePassword(password, user.password));

    if (!isValidUser) {
      logger.error(`connection failed for email : ${email}`);
      throw new UnauthenticatedError("invalid credentials");
    }
    const token = createJWT({ userId: user._id });

    const oneDay = 1000 * 60 * 60 * 24;

    res.cookie("token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + oneDay),
      secure: ENV.NODE_ENV === "production",
    });
  } catch (err) {
    logger.error("");
  }

  res.status(200).json({ msg: "logged in" });
};
