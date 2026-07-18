import { ZodError } from "zod";

export function formatZodError(error: ZodError) {
  return error.flatten();
}