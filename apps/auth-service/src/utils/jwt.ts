import jwt, { SignOptions, Secret } from "jsonwebtoken";
import { env } from "../config";

interface JwtPayload {
  userId: string;
  email: string;
  role: "user" | "admin";
}

//  Generate Access Token

export function generateAccessToken(payload: JwtPayload): string {
  const secret: Secret = env.JWT_SECRET as Secret;
  const option: SignOptions = {
    expiresIn: (env.JWT_ACCESS_EXPIRES_IN ?? "1h") as SignOptions["expiresIn"],
  };
  return jwt.sign(payload, secret, option);
}

// Generate Refresh Token

export function generateRefreshToken(payload: JwtPayload): string {
  const secret: Secret = env.JWT_REFRESH_SECRET as Secret;
  const option: SignOptions = {
    expiresIn: (env.JWT_REFRESH_EXPIRES_IN ?? "7d") as SignOptions["expiresIn"],
  };
  return jwt.sign(payload, secret, option);
}

//  Verify Access Token

export function verifyAccessToken(token: string): JwtPayload {
  return jwt.verify(token, env.JWT_SECRET) as JwtPayload;
}

//  Verify Refresh Token
export function verifyRefreshToken(token: string): JwtPayload {
  return jwt.verify(token, env.JWT_REFRESH_SECRET) as JwtPayload;
}
