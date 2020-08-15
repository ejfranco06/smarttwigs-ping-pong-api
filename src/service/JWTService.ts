import jwt, { JwtHeader } from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const JWT_KEY: jwt.Secret = process.env.JWT_KEY || 'secret key';
const SIGN_OPTIONS: jwt.SignOptions = {
  expiresIn: process.env.JWT_EXPIRES_IN || '1d',
};

export const generateToken = async (username: string) => {
  const payload: {} = { username };
  const token: string = jwt.sign(payload, JWT_KEY, SIGN_OPTIONS);
  return token;
};

export const jwtService = {
  generateToken,
};
