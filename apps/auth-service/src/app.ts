import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"
import helmet from "helmet";
import { errorHandler } from "./middleware/error.middleware";
import authRoutes from "./routes/auth.routes";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(express.urlencoded({extended: true}));

// health check route
app.get("/health",(req,res)=> {
    res.status(200).json({status: "ok"});
});

app.use("/api/auth/v1", authRoutes);
app.use(errorHandler);  


export default app;
