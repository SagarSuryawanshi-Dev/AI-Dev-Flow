import { z } from "zod";
export declare const updateProjectValidator: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    visibility: z.ZodOptional<z.ZodEnum<{
        private: "private";
        public: "public";
    }>>;
}, z.core.$strip>;
export type UpdateProjectInput = z.infer<typeof updateProjectValidator>;
//# sourceMappingURL=update-project.validator.d.ts.map