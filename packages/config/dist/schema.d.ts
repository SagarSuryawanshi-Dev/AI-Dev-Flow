import { z } from "zod";
export declare const baseSchema: z.ZodObject<{
    NODE_ENV: z.ZodDefault<z.ZodEnum<{
        development: "development";
        production: "production";
        test: "test";
    }>>;
    SERVICE_NAME: z.ZodString;
    PORT: z.ZodCoercedNumber<unknown>;
    LOG_LEVEL: z.ZodDefault<z.ZodString>;
}, z.core.$strip>;
//# sourceMappingURL=schema.d.ts.map