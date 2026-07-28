"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerValidator = void 0;
const zod_1 = require("zod");
const schema_1 = require("../schema");
exports.registerValidator = zod_1.z.object({
    firstName: zod_1.z
        .string()
        .trim()
        .min(2, "First name must be at least 2 characters.")
        .max(50, "First name cannot exceed 50 characters."),
    lastName: zod_1.z
        .string()
        .trim()
        .min(2, "Last name must be at least 2 characters.")
        .max(50, "Last name cannot exceed 50 characters."),
    email: schema_1.emailSchema,
    password: schema_1.passwordSchema,
});
//# sourceMappingURL=regsiter.validator.js.map