// The repository is responsible for all database operations.
// Rule: Only the repository talks to MongoDB (via Mongoose). The service layer should not call UserModel directly.

import {IUser, UserModel} from "../models/user.model"

class Authrepository {
    async create(data :Partial <IUser>) {
        return UserModel.create(data)
    }

    async findByEmail(email:string) {
        return UserModel.findOne({email}).select("+password +refreshToken");
    }

    async findById(userId:string) {
        return UserModel.findById(userId)
    }

    async updateRefreshToken (refreshToken:string, userId:string ) {
        return UserModel.findByIdAndUpdate(userId, {refreshToken},{new:true})
    }

    async clearRefreshToken (userId:string) {
        return UserModel.findByIdAndUpdate(userId,{refreshToken:undefined},{new:true})
    }

    async updateLastLogin (userId:string) {
        return UserModel.findByIdAndUpdate(userId,{lastLogin: new Date()}, {new:true})
    }
}

export const authrepository =  new Authrepository()


