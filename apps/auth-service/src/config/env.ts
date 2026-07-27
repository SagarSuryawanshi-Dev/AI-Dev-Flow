import { z } from "zod";

import { createConfig } from "@ai-dev-flow/config";

export const env = createConfig(
  z.object({
    serviceName: z.literal("auth-service"),

    PORT: z.coerce.number(),

    MONGODB_URI: z.string().min(1),

    JWT_SECRET: z.string().min(1),

    JWT_REFRESH_SECRET: z.string().min(1),

    NODE_ENV: z
      .enum(["development", "production", "test"])
      .default("development"),
  }),
);


