import app from "./app";
import { env } from "./config/env.js";

const PORT = env.PORT || 5001;

const ai_service = () => {
    try {
        app.listen(PORT, () => {
    console.log(`AI Service is running on ${PORT}`)
})
    }catch(error) {
        console.log(`Error is Ai Service while running on ${PORT}: ${error}`)
        process.exit(1)
    }
}

ai_service();

