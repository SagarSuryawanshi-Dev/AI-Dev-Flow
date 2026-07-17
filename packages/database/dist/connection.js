import mongoose from "mongoose";
import { DatabaseConnectionError } from "./error.js";
import { DEFAULT_CONNECTION_OPTIONS } from "./options.js";
export async function connectDatabase(uri) {
    try {
        await mongoose.connect(uri, DEFAULT_CONNECTION_OPTIONS);
        console.log("MongoDB connected successfully.");
    }
    catch (error) {
        throw new DatabaseConnectionError(error instanceof Error
            ? error.message
            : "Failed to connect to MongoDB.");
    }
}
//# sourceMappingURL=connection.js.map