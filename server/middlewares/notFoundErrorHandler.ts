import { NotFoundError } from "../errors/NotFoundError";
import { CustomError } from "../errors/CustomError";
import { Request, Response } from "express";

export const notFoundErrorHandler = async (
  err: CustomError,
  req: Request,
  res: Response
) => {
  throw new NotFoundError();
};
