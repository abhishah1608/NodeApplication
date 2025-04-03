import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils/jwt';

// For demonstration, we hardcode a user. Replace this with a DB lookup in real use.
const dummyUser = {
  id: 1,
  username: 'admin',
  passwordHash: bcrypt.hashSync('admin123', 10) // hashed password
};

export const login = async(req: Request, res: Response) => {
  const { username, password } = req.body;

  if (username !== dummyUser.username) {
    res.status(401).json({ message: 'Invalid username or password' });
  }

  const isPasswordValid = await bcrypt.compare(password, dummyUser.passwordHash);
  if (!isPasswordValid) {
     res.status(401).json({ message: 'Invalid username or password' });
  }

  const token = generateToken(dummyUser.id);
  res.json({ token });
};
