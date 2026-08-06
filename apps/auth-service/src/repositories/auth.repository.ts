// The repository is responsible for all database operations.
// Rule: Only the repository talks to MongoDB (via Mongoose). The service layer should not call UserModel directly.

import { IUser, UserModel } from "../models/user.model";

class AuthRepository {
  async create(data: Partial<IUser>) {
    return UserModel.create(data);
  }

  async findByEmail(email: string) {
    return UserModel.findOne({ email }).select("+password +refreshToken");
  }

  async findById(userId: string) {
    return UserModel.findById(userId).select("+refreshToken +password");
  }

  async findByRefreshToken(token: string) {
    return UserModel.findOne({ refreshToken: token }).select("+refreshToken");
  }

  async updateRefreshToken(userId: string, refreshToken: string) {
    return UserModel.findByIdAndUpdate(
      userId,
      { refreshToken },
      { returnDocument: "after" },
    );
  }

  async clearRefreshToken(userId: string) {
    return UserModel.findByIdAndUpdate(
      userId,
      { refreshToken: undefined },
      { returnDocument: "after" },
    );
  }

  async updateLastLogin(userId: string) {
    return UserModel.findByIdAndUpdate(
      userId,
      { lastLogin: new Date() },
      { returnDocument: "after" },
    );
  }

  async updatePassword(userId: string,password: string){
  return UserModel.findByIdAndUpdate(userId,{password,},{returnDocument: "after",})}

  
}


export const authrepository = new AuthRepository();
