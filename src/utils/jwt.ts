import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config(); // MUST BE at the top before using process.env

const secret = process.env.JWT_SECRET!;

export const generateToken = (userId: number) => {
  return jwt.sign({ userId }, secret, { expiresIn: '1h' });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, secret);
};
