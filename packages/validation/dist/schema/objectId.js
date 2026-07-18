"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectIdSchema = void 0;
const zod_1 = require("zod");
exports.objectIdSchema = zod_1.z
    .string()
    .regex(/^[a-fA-F0-9]{24}$/, "Invalid MongoDB ObjectId");
//# sourceMappingURL=objectId.js.map