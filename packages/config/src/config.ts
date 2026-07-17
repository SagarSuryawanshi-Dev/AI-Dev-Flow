import { z } from "zod";

import { loadEnv } from "./loadEnv.js";

import { ConfigValidationError } from "./error.js";

loadEnv();

export function createConfig<T extends z.ZodRawShape>(
  schema: z.ZodObject<T>
) {

  const result = schema.safeParse(process.env);

  if (!result.success) {

    console.error(result.error.flatten());

    throw new ConfigValidationError(
      "Environment validation failed."
    );

  }

  return result.data;

}