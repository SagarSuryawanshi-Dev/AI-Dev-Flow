import { z } from "zod";
import { loadEnv } from "./loadEnv";
import { ConfigValidationError } from "./errors";
loadEnv();
export function createConfig(schema) {
    const result = schema.safeParse(process.env);
    if (!result.success) {
        console.error(result.error.flatten());
        throw new ConfigValidationError("Environment validation failed.");
    }
    return result.data;
}
//# sourceMappingURL=config.js.map