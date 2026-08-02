import { Request, Response, NextFunction } from "express";

import { authService } from "../services/auth.service";
import {
  getRefreshTokenCookieOptions,
  getClearRefreshTokenCookieOptions,
} from "../utils/cookie";

type AuthRequest = Request & {
  user?: {
    userId: string;
  };
};

class AuthController {
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await authService.register(req.body);

      res.cookie(
        "refreshToken",
        result.refreshToken,
        getRefreshTokenCookieOptions(),
      );

      return res.status(201).json({
        success: true,
        message: result.message,
        data: {
          user: result.user,
          accessToken: result.accessToken,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await authService.login(req.body);

      res.cookie(
        "refreshToken",
        result.refreshToken,
        getRefreshTokenCookieOptions(),
      );

      return res.status(200).json({
        success: true,
        message: result.message,
        data: {
          user: result.user,
          accessToken: result.accessToken,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  async refreshToken(req: Request, res: Response, next: NextFunction) {
    try {
      console.log("Cookies:", req.cookies);
console.log("Refresh Token:", req.cookies.refreshToken);
      const refreshToken = req.cookies.refreshToken;

      const result = await authService.refreshToken(refreshToken);
      


      res.cookie(
        "refreshToken",
        result.refreshToken,
        getRefreshTokenCookieOptions(),
      );
    

      return res.status(200).json({
        success: true,
        message: result.message,
        data: {
          accessToken: result.accessToken,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  async logout(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const userId = req.user?.userId;
      if (!userId) {
        return next(new Error("Unauthorized"));
      }

      await authService.logout(userId);

      res.clearCookie("refreshToken", getClearRefreshTokenCookieOptions());

      return res.status(200).json({
        success: true,
        message: "Logout successful.",
      });
    } catch (error) {
      next(error);
    }
  }

  async getProfile(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const userId = req.user?.userId;
      if (!userId) {
        return next(new Error("Unauthorized"));
      }

      const result = await authService.getProfile(userId);

      return res.status(200).json({
        success: true,
        data: result.user,
      });
    } catch (error) {
      next(error);
    }
  }
}

export const authController = new AuthController();
