import { z } from "zod";

import { createConfig } from "@ai-dev-flow/config";

export const env = createConfig(
  z.object({
    serviceName: z.literal("api-gateway"),

    PORT: z.coerce.number(),

    AUTH_SERVICE_URL: z.string().url(),

    PROJECT_SERVICE_URL: z.string().url(),

    AI_SERVICE_URL: z.string().url(),

    WORKER_SERVICE_URL: z.string().url(),

    CLIENT_URL: z.string().url(),

    NODE_ENV: z
      .enum(["development", "production", "test"])
      .default("development"),
  }),
);