import { z } from "zod";

export const baseSchema = z.object({

  NODE_ENV: z.enum([
    "development",
    "production",
    "test"
  ]).default("development"),

  SERVICE_NAME: z.string(),

  PORT: z.coerce.number(),

  LOG_LEVEL: z.string().default("info")

});