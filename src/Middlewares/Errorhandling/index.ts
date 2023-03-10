import { Request, Response, NextFunction } from "express";
import { AppErrors, HttpCode } from "../../Utils/AppError";

const DevError = (err: AppErrors, res: Response) => {
  return res.status(HttpCode.INTERAL_SERVER_ERROR).json({
    error: err,
    message: err.message,
    stack: err.stack,
    status: err.httpCode,
  });
};

export const errorHandlings = (
  err: AppErrors,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  DevError(err, res);
};
