import { z } from "zod";

export const createProjectValidator = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Project name must be at least 3 characters.")
    .max(100, "Project name cannot exceed 100 characters."),

  description: z
    .string()
    .trim()
    .max(1000, "Description cannot exceed 1000 characters.")
    .optional(),

  visibility: z.enum(["private", "public"]).default("private"),
});

export type CreateProjectInput = z.infer<
  typeof createProjectValidator
>;