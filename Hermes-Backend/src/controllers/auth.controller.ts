import { Request, Response } from 'express';




export const handlerAuth = (_req: Request, res: Response) => {
  res.json({ message: 'Authenticated' });
}
