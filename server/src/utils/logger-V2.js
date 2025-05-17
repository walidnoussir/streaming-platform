import fs from "fs";
import path from "path";

const logFilePath = path.join(process.cwd(), "logs", "app.log");

if (!fs.existsSync(path.dirname(logFilePath))) {
  fs.mkdirSync(path.dirname(logFilePath));
}

const logger = (req, res, next) => {
  const logMessage = `${new Date().toISOString()} - ${req.method} ${
    req.url
  } - ${req.ip}\n`;

  fs.appendFile(logFilePath, logMessage, (err) => {
    if (err) throw err;
  });

  console.log(logMessage);

  next();
};

export default logger;
