import { Request, Response, NextFunction } from 'express';
import { z, ZodError } from 'zod';




export const testValidation = () => {
  return (_req: Request, _res: Response, next: NextFunction) : void => {
    next();
  }
}

// check for request middle ware if it is of proper type
export const validateData = (schema: z.ZodObject<any, any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessages = error.errors.map((issue: any) => ({
          message: `${issue.path.join('.')} is ${issue.message}`,
        }))
        res.status(400).json({
          error: true,
          errorMessages: errorMessages,
          userMessage: "Request Validation Failed"
        });
      } else {
        res.status(500).json({
          error: true
          , errorMessage: "Internal error."
          , userMessage: "Internal error. Something went wrong."
        });
      }
    }
  };
}
