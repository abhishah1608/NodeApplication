import { Request, Response } from 'express';

export const getAllUsers = (req: Request, res: Response) => {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ];
  res.json(users);
};
