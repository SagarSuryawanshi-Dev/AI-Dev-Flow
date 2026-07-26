export class AppError extends Error {
  public readonly statusCode: number;
  public readonly success: boolean;

  constructor(
    message: string,
    statusCode: number
  ) {
    super(message);

    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.success = false;

    Error.captureStackTrace(this, this.constructor);
  }
}

