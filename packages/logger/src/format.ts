import winston from "winston";

const { combine, timestamp, errors, printf, colorize, json } =
  winston.format;

const consoleFormat = printf(
  ({ level, message, timestamp, service, stack }) => {

    if (stack) {
      return `[${timestamp}] [${service}] ${level}: ${stack}`;
    }

    return `[${timestamp}] [${service}] ${level}: ${message}`;
  }
);

export const developmentFormat = combine(
  colorize(),
  timestamp({
    format: "YYYY-MM-DD HH:mm:ss",
  }),
  errors({
    stack: true,
  }),
  consoleFormat
);

export const productionFormat = combine(
  timestamp(),
  errors({
    stack: true,
  }),
  json()
);