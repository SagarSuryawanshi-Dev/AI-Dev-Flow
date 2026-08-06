"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const config_1 = require("./config");
const logger_1 = require("@ai-dev-flow/logger");
async function startServer() {
    try {
        app_1.default.listen(config_1.env.PORT, () => {
            logger_1.logger.info(`API Gateway running on port ${config_1.env.PORT}`);
        });
    }
    catch (error) {
        logger_1.logger.error(error);
        process.exit(1);
    }
}
startServer();
//# sourceMappingURL=server.js.map