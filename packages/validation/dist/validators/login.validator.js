"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidator = void 0;
const zod_1 = require("zod");
const schema_1 = require("../schema");
exports.loginValidator = zod_1.z.object({
    email: schema_1.emailSchema,
    password: zod_1.z.string().min(1, "Password is required."),
});
//# sourceMappingURL=login.validator.js.map