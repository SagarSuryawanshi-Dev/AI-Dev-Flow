import { z } from "zod";
import { baseSchema } from "./schema.js";
import { createConfig } from "./config.js";
export function createEnv(serviceSchema) {
    return createConfig(baseSchema.merge(serviceSchema));
}
//# sourceMappingURL=env.js.map