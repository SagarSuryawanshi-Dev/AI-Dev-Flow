import { z } from "zod";
export declare const createProjectValidator: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    visibility: z.ZodDefault<z.ZodEnum<{
        private: "private";
        public: "public";
    }>>;
}, z.core.$strip>;
export type CreateProjectInput = z.infer<typeof createProjectValidator>;
//# sourceMappingURL=create-project.validator.d.ts.map