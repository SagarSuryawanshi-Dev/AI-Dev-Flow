import { Request, Response, NextFunction } from "express";
import type { JwtPayload } from "jsonwebtoken";

import { verifyAccessToken } from "../utils/jwt";
import { UnauthorizedError } from "../errors";

declare global {
  namespace Express {
    interface Request {
      user: JwtPayload;
    }
  }
}

export async function authenticate(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const authorization = req.headers.authorization;

    if (!authorization) {
      throw new UnauthorizedError("Access token is required.");
    }

    if (!authorization.startsWith("Bearer ")) {
      throw new UnauthorizedError("Invalid authorization header.");
    }

    const token = authorization.split(" ")[1];

    if (!token) {
      throw new UnauthorizedError("Access token is required.");
    }

    const payload = verifyAccessToken(token);

    req.user = payload;

    next();
  } catch (error) {
    next(error);
  }
}

