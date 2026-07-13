"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT = process.env.PORT || 5001;
const ai_service = () => {
    try {
        app_1.default.listen(PORT, () => {
            console.log(`AI Service is running on ${PORT}`);
        });
    }
    catch (error) {
        console.log(`Error is Ai Service while running on ${PORT}: ${error}`);
        process.exit(1);
    }
};
ai_service();
//# sourceMappingURL=server.js.map