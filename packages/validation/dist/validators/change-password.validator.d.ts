import { z } from "zod";
export declare const changePasswordValidator: z.ZodObject<{
    currentPassword: z.ZodString;
    newPassword: z.ZodString;
}, z.core.$strip>;
export type ChangePasswordInput = z.infer<typeof changePasswordValidator>;
//# sourceMappingURL=change-password.validator.d.ts.map