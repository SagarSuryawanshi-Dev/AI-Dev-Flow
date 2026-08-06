"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const zod_1 = require("zod");
const config_1 = require("@ai-dev-flow/config");
exports.env = (0, config_1.createConfig)(zod_1.z.object({
    serviceName: zod_1.z.literal("api-gateway"),
    PORT: zod_1.z.coerce.number(),
    AUTH_SERVICE_URL: zod_1.z.string().url(),
    PROJECT_SERVICE_URL: zod_1.z.string().url(),
    AI_SERVICE_URL: zod_1.z.string().url(),
    WORKER_SERVICE_URL: zod_1.z.string().url(),
    CLIENT_URL: zod_1.z.string().url(),
    NODE_ENV: zod_1.z
        .enum(["development", "production", "test"])
        .default("development"),
}));
//# sourceMappingURL=env.js.map