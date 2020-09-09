import ErrorInterface from './ErrorInterface';

class CustomError extends Error {
  public code: string;
  public message: string;
  public field?: string;
  public statusCode: number;

  constructor(error: ErrorInterface) {
    super(error.message);
    this.code = error.code;
    this.message = error.message;
    this.field = error.field;
    this.statusCode = error.statusCode;
  }
}

export default CustomError;
