"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const PORT = process.env.PORT || 5005;
const worker_service = () => {
    try {
        app_1.default.listen(PORT, () => {
            console.log(`Worker service is running on ${PORT}`);
        });
    }
    catch (error) {
        console.log(`Error is Worker service while running on ${PORT}: ${error}`);
        process.exit(1);
    }
};
worker_service();
//# sourceMappingURL=server.js.map