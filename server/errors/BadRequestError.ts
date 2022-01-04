import { CustomError, IReturnError } from "./CustomError";

export class BadRequestError extends CustomError {
  public statusCode: number = 400;

  constructor() {
    super("Bad request.");

    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  public serialError(): IReturnError {
    return [
      {
        message: this.message,
        field: "File Processing",
      },
    ];
  }
}
