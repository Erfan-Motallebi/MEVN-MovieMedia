import { Response, Request, NextFunction } from "express";
import { CustomError } from "../errors/CustomError";

export const errorHandlerMiddleware = async (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ errors: err.serialError() });
  }

  console.error(err);
  res
    .status(400)
    .json({ errors: { message: "There's something going wrong" } });
};
