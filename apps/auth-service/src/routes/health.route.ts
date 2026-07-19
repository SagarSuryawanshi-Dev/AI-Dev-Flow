import { Router } from "express";

const router = Router();

router.get("/", (_, res) => {
  res.status(200).json({
    success: true,
    service: "Auth Service",
    status: "Running",
    timestamp: new Date(),
  });
});

export default router;