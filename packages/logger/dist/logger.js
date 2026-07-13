"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
class Logger {
    info(message) {
        console.log(`[INFO]`);
    }
    error(message) {
        console.log(`[ERROR] ${message}`);
    }
    warn(message) {
        console.log(`[WARN] ${message}`);
    }
}
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map