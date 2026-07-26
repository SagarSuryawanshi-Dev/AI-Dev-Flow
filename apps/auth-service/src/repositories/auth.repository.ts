import {UserModel} from "../models/user.models"



class AuthRepository {
  async create(data: any) {
    return UserModel.create(data);
  }

  async findByEmail(email: string) {
    return UserModel.findOne({ email });
  }

  async findById(id: string) {
    return UserModel.findById(id);
  }

  async updateRefreshToken(
    userId: string,
    refreshToken: string
  ) {
    return UserModel.findByIdAndUpdate(
      userId,
      { refreshToken },
      { new: true }
    );
  }

  async clearRefreshToken(userId: string) {
    return UserModel.findByIdAndUpdate(
      userId,
      { refreshToken: null },
      { new: true }
    );
  }

  async updateLastLogin(userId: string) {
    return UserModel.findByIdAndUpdate(
      userId,
      {
        lastLogin: new Date(),
      },
      { new: true }
    );
  }
  async findByEmailWithPassword(email: string) {
  return UserModel.findOne({ email }).select(
    "+password +refreshToken"
  );
}
}

export const authRepository = new AuthRepository();