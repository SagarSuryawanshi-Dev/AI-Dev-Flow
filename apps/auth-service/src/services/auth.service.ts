import{  logger}  from "../config/logger";
import { authRepository } from "../repositories/auth.repository";

import { RegisterDto } from "../validations/auth.validation";

import { hashPassword, comparePassword } from "../utils/password";

import {
  generateAccessToken,generateRefreshToken,verifyRefreshToken,} from "../utils/jwt";

import { ConflictError, UnauthorizedError, NotFoundError } from "../errors";

export class AuthService {
    // Register User

  async register(data: RegisterDto) {
    const { firstName, lastName, email, password } = data;

    logger.info(`Register request received for ${email}`);

    // Check if email already exists
    const existingUser = await authRepository.findByEmail(email);

    if (existingUser) {
      throw new ConflictError("Email already exists.");
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create user
    const user = await authRepository.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    // Create JWT payload
    const payload = {
      userId: user.id,
      email: user.email,
      role: user.role,
    };

    // Generate Tokens
    const accessToken = generateAccessToken(payload);

    const refreshToken = generateRefreshToken(payload);

    // Store refresh token
    await authRepository.updateRefreshToken(user.id, refreshToken);

    logger.info(`User registered successfully: ${email}`);

    return {
      user,
      accessToken,
      refreshToken,
    };
  }
}

export const authService = new AuthService();
