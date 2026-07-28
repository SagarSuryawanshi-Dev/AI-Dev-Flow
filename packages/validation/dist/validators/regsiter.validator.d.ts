import { z } from "zod";
export declare const registerValidator: z.ZodObject<{
    firstName: z.ZodString;
    lastName: z.ZodString;
    email: z.ZodEmail;
    password: z.ZodString;
}, z.core.$strip>;
export type RegisterInput = z.infer<typeof registerValidator>;
//# sourceMappingURL=regsiter.validator.d.ts.map