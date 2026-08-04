"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changePasswordValidator = void 0;
const zod_1 = require("zod");
const schema_1 = require("../schema");
exports.changePasswordValidator = zod_1.z.object({
    currentPassword: zod_1.z
        .string()
        .min(1, "Current password is required."),
    newPassword: schema_1.passwordSchema,
});
//# sourceMappingURL=change-password.validator.js.map