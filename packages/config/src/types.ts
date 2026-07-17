import { z } from "zod";

export type Environment = "development" | "production" | "test";

export type Config<T extends z.ZodRawShape> =
  z.infer<z.ZodObject<T>>;