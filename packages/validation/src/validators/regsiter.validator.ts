import { z } from "zod";

import {
  emailSchema,
  passwordSchema,
} from "../schema";

export const registerValidator = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, "First name must be at least 2 characters.")
    .max(50, "First name cannot exceed 50 characters."),

  lastName: z
    .string()
    .trim()
    .min(2, "Last name must be at least 2 characters.")
    .max(50, "Last name cannot exceed 50 characters."),

  email: emailSchema,

  password: passwordSchema,
});

export type RegisterInput = z.infer<typeof registerValidator>