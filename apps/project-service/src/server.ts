import app from "./app";


const PORT = process.env.PORT || 5004;

const project_service = () => {
    try {
        app.listen(PORT, () => {
    console.log(`Project service is running on ${PORT}`)
})
    }catch(error) {
        console.log(`Error is Project service while running on ${PORT}: ${error}`)
        process.exit(1)
    }
}

project_service();