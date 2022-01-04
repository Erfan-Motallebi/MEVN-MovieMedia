import { CustomError, IReturnError } from "./CustomError";

export class NotFoundError extends CustomError {
  public statusCode: number = 404;

  constructor() {
    super("Page not found.");

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  public serialError(): IReturnError {
    return [
      {
        message: this.message,
        field: "",
      },
    ];
  }
}
