import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(cors());

app.use(helmet());

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "api-gateway",
  });
});

export default app;
