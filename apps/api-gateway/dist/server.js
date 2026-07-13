"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const PORT = process.env.PORT || 5002;
const api_gateway = () => {
    try {
        app_1.default.listen(PORT, () => {
            console.log(`API Gateway is running on ${PORT}`);
        });
    }
    catch (error) {
        console.log(`Error is API Gateway while running on ${PORT}: ${error}`);
        process.exit(1);
    }
};
api_gateway();
//# sourceMappingURL=server.js.map