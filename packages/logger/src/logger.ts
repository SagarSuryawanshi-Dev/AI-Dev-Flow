import winston from "winston";

import { createTransports } from "./transports";
import { RequestContextManager } from "./context";
import {
  DEFAULT_LOG_LEVEL,
  DEFAULT_SERVICE_NAME,
} from "./constants";

import { LoggerOptions } from "./types";

export function createLogger(options: LoggerOptions) {
  return winston.createLogger({
    level:
      options.level ??
      process.env.LOG_LEVEL ??
      DEFAULT_LOG_LEVEL,

    defaultMeta: {
      service:
        options.serviceName ??
        DEFAULT_SERVICE_NAME,

      environment:
        process.env.NODE_ENV ?? "development",
    },

    format: winston.format.combine(
      winston.format((info) => {
        const context =
          RequestContextManager.getContext();

        if (context) {
          info.requestId = context.requestId;
          info.userId = context.userId;
        }

        return info;
      })(),

      winston.format.timestamp(),

      winston.format.errors({
        stack: true,
      }),

      winston.format.json()
    ),

    transports: createTransports(),
  });
}