"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const PORT = process.env.PORT || 5004;
const project_service = () => {
    try {
        app_1.default.listen(PORT, () => {
            console.log(`Project service is running on ${PORT}`);
        });
    }
    catch (error) {
        console.log(`Error is Project service while running on ${PORT}: ${error}`);
        process.exit(1);
    }
};
project_service();
//# sourceMappingURL=server.js.map