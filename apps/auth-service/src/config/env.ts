import { z } from "zod";
import { createConfig } from "@ai-dev-flow/config";

export const env = createConfig(
  z.object({
    NODE_ENV: z.enum(["development", "production", "test"]),

    PORT: z.coerce.number(),

    MONGODB_URI: z.string().min(1),

    JWT_SECRET: z.string().min(32),

    JWT_REFRESH_SECRET: z.string().min(32),

    JWT_ACCESS_EXPIRES_IN: z.string(),

    JWT_REFRESH_EXPIRES_IN: z.string(),
  }),
);
