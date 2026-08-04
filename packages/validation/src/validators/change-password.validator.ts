import { z } from "zod";

import { passwordSchema } from "../schema";

export const changePasswordValidator = z.object({
  currentPassword: z
    .string()
    .min(1, "Current password is required."),

  newPassword: passwordSchema,
});

export type ChangePasswordInput = z.infer<typeof changePasswordValidator>;