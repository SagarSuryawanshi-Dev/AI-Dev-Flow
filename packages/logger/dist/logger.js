"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLogger = createLogger;
const winston_1 = __importDefault(require("winston"));
const transports_1 = require("./transports");
const context_1 = require("./context");
const constants_1 = require("./constants");
function createLogger(options) {
    return winston_1.default.createLogger({
        level: options.level ??
            process.env.LOG_LEVEL ??
            constants_1.DEFAULT_LOG_LEVEL,
        defaultMeta: {
            service: options.serviceName ??
                constants_1.DEFAULT_SERVICE_NAME,
            environment: process.env.NODE_ENV ?? "development",
        },
        format: winston_1.default.format.combine(winston_1.default.format((info) => {
            const context = context_1.RequestContextManager.getContext();
            if (context) {
                info.requestId = context.requestId;
                info.userId = context.userId;
            }
            return info;
        })(), winston_1.default.format.timestamp(), winston_1.default.format.errors({
            stack: true,
        }), winston_1.default.format.json()),
        transports: (0, transports_1.createTransports)(),
    });
}
//# sourceMappingURL=logger.js.map