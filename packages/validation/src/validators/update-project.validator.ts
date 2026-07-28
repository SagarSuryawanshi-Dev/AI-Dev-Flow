import { z } from "zod";

export const updateProjectValidator = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Project name must be at least 3 characters.")
    .max(100, "Project name cannot exceed 100 characters.")
    .optional(),

  description: z
    .string()
    .trim()
    .max(1000, "Description cannot exceed 1000 characters.")
    .optional(),

  visibility: z
    .enum(["private", "public"])
    .optional(),
});

export type UpdateProjectInput = z.infer<
  typeof updateProjectValidator
>;