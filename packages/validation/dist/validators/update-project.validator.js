"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProjectValidator = void 0;
const zod_1 = require("zod");
exports.updateProjectValidator = zod_1.z.object({
    name: zod_1.z
        .string()
        .trim()
        .min(3, "Project name must be at least 3 characters.")
        .max(100, "Project name cannot exceed 100 characters.")
        .optional(),
    description: zod_1.z
        .string()
        .trim()
        .max(1000, "Description cannot exceed 1000 characters.")
        .optional(),
    visibility: zod_1.z
        .enum(["private", "public"])
        .optional(),
});
//# sourceMappingURL=update-project.validator.js.map