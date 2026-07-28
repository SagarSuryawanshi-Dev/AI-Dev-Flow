import { z } from "zod";
export declare const loginValidator: z.ZodObject<{
    email: z.ZodEmail;
    password: z.ZodString;
}, z.core.$strip>;
export type LoginInput = z.infer<typeof loginValidator>;
//# sourceMappingURL=login.validator.d.ts.map