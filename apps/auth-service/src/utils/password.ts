import bcrypt from "bcrypt"

const SALT = 12

// hash plain password

export async function hashPassword(password:string): Promise <string> {
    return bcrypt.hash(password, SALT)
}

// compare plain password with hashed password

export async function comparePassword(password:string,hashedPassword:string):Promise<boolean> {
    return bcrypt.compare(password,hashedPassword)
}

