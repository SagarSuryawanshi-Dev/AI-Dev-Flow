import { z } from "zod";

export const passwordSchema = z
  .string()
  .min(8)
  .max(100)
  .regex(/[A-Z]/, "Must contain one uppercase letter")
  .regex(/[a-z]/, "Must contain one lowercase letter")
  .regex(/[0-9]/, "Must contain one number");