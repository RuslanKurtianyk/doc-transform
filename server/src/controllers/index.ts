import { Request, Response } from 'express';

export const index = async (req: Request, res: Response): Promise<void> => {
  res.send({data: 'Hello from server'})
};