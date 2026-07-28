import { CookieOptions } from "express";

import { env } from "../config";

const REFRESH_TOKEN_MAX_AGE =
  7 * 24 * 60 * 60 * 1000;

export function getRefreshTokenCookieOptions(): CookieOptions {
  return {
    httpOnly: true,

    secure: env.NODE_ENV === "production",

    sameSite: "strict",

    maxAge: REFRESH_TOKEN_MAX_AGE,

    path: "/api/v1/auth/refresh",
  };
}

export function getClearRefreshTokenCookieOptions(): CookieOptions {
  return {
    httpOnly: true,

    secure: env.NODE_ENV === "production",

    sameSite: "strict",

    path: "/api/v1/auth/refresh",
  };
}