import { z } from "zod";

// Register Validation Schema

export const registerSchema = z
  .object({
    firstName: z
      .string()
      .trim()
      .min(2, "First name must be at least 2 characters.")
      .max(50, "First name cannot exceed 50 characters."),

    lastName: z
      .string()
      .trim()
      .min(2, "Last name must be at least 2 characters.")
      .max(50, "Last name cannot exceed 50 characters."),

    email: z.string().trim().toLowerCase().email("Invalid email address."),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters.")
      .max(100, "Password cannot exceed 100 characters.")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/,
        "Password must contain uppercase, lowercase, number and special character.",
      ),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

// Login Validation Schema
export const loginSchema = z.object({
  email: z.string().trim().toLowerCase().email("Invalid email address."),

  password: z.string().min(1, "Password is required."),
});

// Refresh Token Validation
export const refreshTokenSchema = z.object({
  refreshToken: z.string().min(1, "Refresh token is required."),
});

// User ID Validation
export const userIdSchema = z.object({
  userId: z.string().min(1),
});

// Change Password Validation

export const changePasswordSchema = z
  .object({
    currentPassword: z.string(),

    newPassword: z
      .string()
      .min(8)
      .max(100)
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/,
        "Password must contain uppercase, lowercase, number and special character.",
      ),

    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export type RegisterDto = z.infer<typeof registerSchema>;

export type LoginDto = z.infer<typeof loginSchema>;

export type RefreshTokenDto = z.infer<typeof refreshTokenSchema>;

export type ChangePasswordDto = z.infer<typeof changePasswordSchema>;
