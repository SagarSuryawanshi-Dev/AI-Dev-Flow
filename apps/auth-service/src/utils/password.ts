import bcrypt from "bcrypt";

const SALT_ROUNDS = 12;
//   Hash a plain text password.
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, SALT_ROUNDS);
}

//  Compare a plain text password with its hash.
export async function comparePassword(
  password: string,
  hashedPassword: string,
): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}
