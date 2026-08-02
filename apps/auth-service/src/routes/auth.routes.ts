import { Router } from "express";

import { authController } from "../controllers/auth.controller";
import { authenticate } from "../middleware/auth.middleware"


import {validate,registerValidator,loginValidator} from "@ai-dev-flow/validation";

const router = Router();

// Public Routes
router.post("/register",validate(registerValidator),authController.register);

router.post("/login",validate(loginValidator),authController.login);

router.post("/refresh",authController.refreshToken);

// Protected Routes
router.post("/logout",authenticate,authController.logout);

router.get("/me",authenticate,authController.getProfile);

export default router;