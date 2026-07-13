import app from "./app";


const PORT = process.env.PORT || 5003;

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