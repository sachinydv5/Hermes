import { Request, Response, NextFunction } from 'express';
import { z, ZodError } from 'zod';



//
// export const testValidation = () => {
//   return (_req: Request, _res: Response, next: NextFunction) : void => {
//     next();
//   }
// }
//
// check for request middle ware if it is of proper type
export const validateData = (schema: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log("start Time 1")
      console.time();
      schema.parse(req.body);
      console.timeEnd()
      console.log("end Time")
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const _errorMessages = error.errors.map((issue: any) => ({
          message: `${issue.path.join('.')} is ${issue.message}`,
        }))
        console.log(error)
        res.status(400).json({
          error: true,
          error_code: "REQUEST_VALIDATION_FAILED",
          errorMessages: _errorMessages,
          userMessage: "Request Validation Failed"
        });
      } else {
        res.status(500).json({
          error: true,
          // errorMessage: "Internal error."
          error_code: "REQUEST_VALIDATION_FAILED",
          userMessage: "Internal error. Something went wrong."
        });
      }
    }
  };
}
