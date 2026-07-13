import express from "express";
import type { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config()
const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req:Request, res:Response) => {
  res.status(200).json({
    message: "Worker Service is Healthy",
  });
});


export default app;