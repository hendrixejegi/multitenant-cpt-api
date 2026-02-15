import jwt, { SignOptions, Secret } from "jsonwebtoken";
import { JwtPayload } from "../types";

const JWT_SECRET: Secret = (process.env.JWT_SECRET ||
  "fallback-secret-change-in-production") as Secret;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d";

/**
 * Generate a JWT token for authenticated user
 */
export const generateToken = (payload: JwtPayload): string => {
  const options: SignOptions = {
    expiresIn: JWT_EXPIRES_IN,
    issuer: "cbt-auth-system",
  } as SignOptions;

  // `payload` conforms to an object shape; cast to `object` to satisfy overloads
  return jwt.sign(payload as object, JWT_SECRET, options);
};

/**
 * Verify and decode a JWT token
 */
export const verifyToken = (token: string): JwtPayload => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
    return decoded;
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      throw new Error("Token has expired");
    }
    if (error instanceof jwt.JsonWebTokenError) {
      throw new Error("Invalid token");
    }
    throw new Error("Token verification failed");
  }
};

/**
 * Decode token without verification (for debugging)
 */
export const decodeToken = (token: string): JwtPayload | null => {
  try {
    return jwt.decode(token) as JwtPayload;
  } catch (error) {
    return null;
  }
};
