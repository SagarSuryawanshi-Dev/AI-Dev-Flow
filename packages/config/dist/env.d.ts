import { z } from "zod";
export declare function createEnv<T extends z.ZodRawShape>(serviceSchema: z.ZodObject<T>): z.core.$InferObjectOutput<(("LOG_LEVEL" | "NODE_ENV" | "PORT" | "SERVICE_NAME") & keyof T extends never ? {
    NODE_ENV: z.ZodDefault<z.ZodEnum<{
        development: "development";
        production: "production";
        test: "test";
    }>>;
    SERVICE_NAME: z.ZodString;
    PORT: z.ZodCoercedNumber<unknown>;
    LOG_LEVEL: z.ZodDefault<z.ZodString>;
} & T : ({
    NODE_ENV: z.ZodDefault<z.ZodEnum<{
        development: "development";
        production: "production";
        test: "test";
    }>>;
    SERVICE_NAME: z.ZodString;
    PORT: z.ZodCoercedNumber<unknown>;
    LOG_LEVEL: z.ZodDefault<z.ZodString>;
} extends infer T_2 extends z.util.SomeObject ? { [K in keyof T_2 as K extends keyof T ? never : K]: T_2[K]; } : never) & { [K in keyof T]: T[K]; }) extends infer T_1 ? { [k in keyof T_1]: T_1[k]; } : never, {}>;
//# sourceMappingURL=env.d.ts.map