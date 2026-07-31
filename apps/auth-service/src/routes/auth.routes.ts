import { Router } from "express";

import { authController } from "../controllers/auth.controller";
import {
  registerValidator,
  loginValidator,
} from "@ai-dev-flow/validation";
import { authenticate } from "../middleware/validate.middleware";

const router = Router();

// Public Routes
router.post(
  "/register",
  registerValidator,
  authController.register
);

router.post(
  "/login",
  loginValidator,
  authController.login
);

router.post(
  "/refresh",
  authController.refreshToken
);

// Protected Routes
router.post(
  "/logout",
  authenticate,
  authController.logout
);

router.get(
  "/me",
  authenticate,
  authController.getProfile
);

export default router;