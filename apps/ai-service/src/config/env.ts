
import { z } from "zod";
import { createEnv } from "@ai-dev-flow/config";

export const env = createEnv(
  z.object({
    MONGODB_URI: z.string().min(1),

    JWT_SECRET: z.string().min(10),
  })
);