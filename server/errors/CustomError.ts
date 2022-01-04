export type IReturnError = {
  message: string;
  field?: string;
}[];

export abstract class CustomError extends Error {
  public abstract statusCode: number;

  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  public abstract serialError(): IReturnError;
}
