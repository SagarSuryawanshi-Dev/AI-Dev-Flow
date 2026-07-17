import { z } from "zod";

import { baseSchema } from "./schema.js";

import { createConfig } from "./config.js";

export function createEnv<T extends z.ZodRawShape>(
  serviceSchema: z.ZodObject<T>
) {

  return createConfig(
    baseSchema.merge(serviceSchema)
  );

}