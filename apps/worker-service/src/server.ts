import app from "./app";


const PORT = process.env.PORT || 5005;

const worker_service = () => {
    try {
        app.listen(PORT, () => {
    console.log(`Worker service is running on ${PORT}`)
})
    }catch(error) {
        console.log(`Error is Worker service while running on ${PORT}: ${error}`)
        process.exit(1)
    }
}

worker_service();