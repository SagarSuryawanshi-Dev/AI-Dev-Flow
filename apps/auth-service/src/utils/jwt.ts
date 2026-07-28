import jwt, { Secret } from "jsonwebtoken";

import { env } from "../config";

export interface JwtPayload {
  userId: string;
  email: string;
  role: "user" | "admin";
}

export function generateAccessToken(payload: JwtPayload) {
  return jwt.sign(payload, env.JWT_SECRET as Secret, {
    expiresIn: "15m",
  });
}

export function generateRefreshToken(payload: JwtPayload) {
  return jwt.sign(payload, env.JWT_REFRESH_SECRET as Secret, {
    expiresIn: "7d",
  });
}
export function verifyAccessToken(token: string){
  return jwt.verify(token,env.JWT_SECRET as Secret) as JwtPayload;
}

export function verifyRefreshToken(token: string) {
  return jwt.verify(token,env.JWT_REFRESH_SECRET as Secret) as JwtPayload;
}

