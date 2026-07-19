import jwt from "jsonwebtoken";
import { env } from "../config";

interface JwtPayload {
  userId: string;
  email: string;
  role: "user" | "admin";
}



//  Generate Access Token

export function generateAccessToken(
  payload: JwtPayload
): string {
  return jwt.sign(payload, env.JWT_SECRET, {
    expiresIn: env.JWT_ACCESS_EXPIRES_IN,
  });
}


// Generate Refresh Token

export function generateRefreshToken(
  payload: JwtPayload
): string {
  return jwt.sign(payload, env.JWT_REFRESH_SECRET, {
    expiresIn: env.JWT_REFRESH_EXPIRES_IN,
  });
}


//  Verify Access Token

export function verifyAccessToken(
  token: string
): JwtPayload {
  return jwt.verify(
    token,
    env.JWT_SECRET
  ) as JwtPayload;
}


//  Verify Refresh Token
export function verifyRefreshToken(
  token: string
): JwtPayload {
  return jwt.verify(
    token,
    env.JWT_REFRESH_SECRET
  ) as JwtPayload;
}