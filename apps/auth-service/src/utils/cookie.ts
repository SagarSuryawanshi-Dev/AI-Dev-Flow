import { CookieOptions, Response } from "express";

import { env } from "../config";

const REFRESH_TOKEN_MAX_AGE =
  7 * 24 * 60 * 60 * 1000;

export function getRefreshTokenCookieOptions(): CookieOptions {
  return {
    httpOnly: true,

    secure: env.NODE_ENV === "production",

    sameSite: "strict",

    maxAge: REFRESH_TOKEN_MAX_AGE,

    path: "/api/auth/v1/refresh",
  };
}

export function getClearRefreshTokenCookieOptions(): CookieOptions {
  return {
    httpOnly: true,

    secure: env.NODE_ENV === "production",

    sameSite: "strict",

    path: "/api/auth/v1/refresh",
  };
}

export function setRefreshTokenCookie(
  res: Response,
  refreshToken: string
) {
  res.cookie(
    "refreshToken",
    refreshToken,
    getRefreshTokenCookieOptions()
  );
}

export function clearRefreshTokenCookie(res: Response) {
  res.clearCookie(
    "refreshToken",
    getClearRefreshTokenCookieOptions()
  );
}