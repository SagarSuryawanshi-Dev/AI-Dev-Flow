import { authrepository } from "../repositories/auth.repository";
import { hashPassword } from "../utils/password";
import { generateAccessToken, generateRefreshToken,verifyRefreshToken } from "../utils/jwt";
import { comparePassword } from "../utils/password";
import { ConflictError, NotFoundError, UnauthorizedError } from "../errors";
import { toUserResponse } from "../mappers/user.mapper";
import { RegisterInput, LoginInput } from "@ai-dev-flow/validation";
import { logger } from "@ai-dev-flow/logger";



class AuthService {
  async register(data: RegisterInput) {
    logger.info("User registration started.", {
      email: data.email,
    });
    const existingUser = await authrepository.findByEmail(data.email);

    if (existingUser) {
      throw new ConflictError("Email already exists.");
    }

    const hashedPassword = await hashPassword(data.password);

    const user = await authrepository.create({
      ...data,
      password: hashedPassword,
    });

    const accessToken = generateAccessToken({
      userId: user.id,
      email: user.email,
      role: user.role,
    });

    const refreshToken = generateRefreshToken({
      userId: user.id,
      email: user.email,
      role: user.role,
    });

    await authrepository.updateRefreshToken(user.id, refreshToken);
    await authrepository.updateLastLogin(user.id);

    const userResponse = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
      isVerified: user.isVerified,
      isActive: user.isActive,
    };

    return {
      user: toUserResponse(user),
      accessToken,
      refreshToken,
      message: "User registered successfully.",
    };
    logger.info("User registered successfully", {
      userId: user.id,
      email: user.email,
    });
  }

  async login(data: LoginInput) {
    logger.info("User login started.", { email: data.email });

    const user = await authrepository.findByEmail(data.email);
    if (!user) {
      (logger.warn("Login Failed,User Not Found"), { email: data.email });
      throw new UnauthorizedError("Invalid email or Password");
    }

    const isPasswordValid = await comparePassword(data.password, user.password);

    if (!isPasswordValid) {
      logger.warn("Login Failed, Invalid Password");
      throw new UnauthorizedError("Invalid Email or Password");
    }

    const accessToken = generateAccessToken({
      userId: user.id,
      email: user.email,
      role: user.role,
    });

    const refreshToken = generateRefreshToken({
      userId: user.id,
      email: user.email,
      role: user.role,
    });

    // rotate refresh token
    await authrepository.updateRefreshToken(user.id, refreshToken);

    // update last login
    await authrepository.updateLastLogin(user.id);

    logger.info("User Logged in Successfully", {
      userId: user.id,
      email: user.email,
    });

    return {
      user: toUserResponse(user),
      accessToken,
      refreshToken,
      message: "Login Successful",
    };
  }

  async refreshToken(token:string) {
    logger.info("Refreshing aceess token")

    if(!token) {
        throw new UnauthorizedError("Refresh token is required.")
    }
    const payload = verifyRefreshToken(token)
    const user = await authrepository.findById(payload.userId)
    if(!user) {
        throw new UnauthorizedError("Inavalid refresh token")
    }

    if(user.refreshToken !== token) {
        throw new UnauthorizedError("Invalid refresh token")
    }

    const accessToken = generateAccessToken({
        userId:user.id,
        email:user.email,
        role:user.role
    })

    const newRefreshToken = generateRefreshToken({
        userId:user.id,
        email:user.email,
        role:user.role
    })

    await authrepository.updateRefreshToken(user.id,newRefreshToken)

    logger.info("Refresh token rotate successfully,",{
        userId:user.id
    })

    return {
        user:toUserResponse(user),
        accessToken,
        refreshToken:newRefreshToken,
        message:"Token refresh Successfully."
    }

  }

  async logout(userId:string) {
    logger.info("User logout started.",{
        userId
    });

    const user = await authrepository.findById(userId)

    if(!user){
        logger.warn("Logout failed,User not found", {
            userId
        })

        throw new NotFoundError("User Not Found")
    }
    await authrepository.clearRefreshToken(userId);
    logger.info("User logout Successfully",{
        userId
    })

    return{
        message:"Logout Successfully"
    }
  }

  async getProfile(userId:string){
    logger.info("Fetching user profile"),{userId}

    const user = await authrepository.findById(userId)

    if(!user){
        logger.warn("Profile fetch failed,User not found",{userId});
    throw new NotFoundError("User not found")
    }

    logger.info("User profile fetched successfully.",{userId})

    return {
        user:toUserResponse(user),
        message:"Profile Fetched"
    }

  }


}

export const authService = new AuthService();
