import app from "./app";

import { env } from "./config";
import { logger } from "./config/logger";

import { connectDatabase } from "@ai-dev-flow/database";

async function startServer() {
  try {
    await connectDatabase(env.MONGODB_URI);

    app.listen(env.PORT, () => {
      logger.info(
        `Auth Service running on port ${env.PORT}`
      );
    });
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
}

startServer();