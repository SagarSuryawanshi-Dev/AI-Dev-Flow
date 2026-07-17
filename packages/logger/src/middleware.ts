import { Request, Response, NextFunction } from "express";
import { randomUUID } from "node:crypto";

import { RequestContextManager } from "./context";
import { createLogger } from "./logger";

export function requestLogger(serviceName: string) {
  const logger = createLogger({ serviceName });

  return (req: Request, res: Response, next: NextFunction) => {
    const requestId = randomUUID();

    const start = Date.now();

    RequestContextManager.run(
      {
        requestId,
        serviceName,
      },
      () => {
        logger.info("Incoming request", {
          requestId,
          method: req.method,
          path: req.originalUrl,
        });

        res.on("finish", () => {
          logger.info("Request completed", {
            requestId,
            method: req.method,
            path: req.originalUrl,
            statusCode: res.statusCode,
            duration: `${Date.now() - start}ms`,
          });
        });

        next();
      },
    );
  };
}
