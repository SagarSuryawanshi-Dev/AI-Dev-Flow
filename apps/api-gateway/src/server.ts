import app from "./app";


const PORT = process.env.PORT || 5002;

const api_gateway = () => {
    try {
        app.listen(PORT, () => {
    console.log(`API Gateway is running on ${PORT}`)
})
    }catch(error) {
        console.log(`Error is API Gateway while running on ${PORT}: ${error}`)
        process.exit(1)
    }
}

api_gateway();