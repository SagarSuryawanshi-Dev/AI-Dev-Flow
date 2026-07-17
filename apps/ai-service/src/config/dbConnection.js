import { connectDatabase } from "@ai-dev-flow/database";
import { env } from "./config/env";

await connectDatabase(env.MONGODB_URI);