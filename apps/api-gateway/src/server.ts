import app from "./app";

import { env } from "./config";

import { logger } from "@ai-dev-flow/logger";

async function startServer() {
  try {
    app.listen(env.PORT, () => {
      logger.info(
        `API Gateway running on port ${env.PORT}`,
      );
    });
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
}

startServer();