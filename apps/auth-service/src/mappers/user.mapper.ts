import { IUser } from "../models/user.model";

export function toUserResponse(user: IUser) {
  return {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    role: user.role,
    isVerified: user.isVerified,
    isActive: user.isActive,
  };
}