type ErrorCodes =
  | 'unauthorized'
  | 'bad_request'
  | 'not_found'
  | 'validation_error'
  | 'user_exists'
  | 'invalid_token'
  | 'invalid_credentials';

interface CustomError {
  status: number;
  message: string;
  code: ErrorCodes;
  data?: unknown;
}

export class AppError extends Error {
  status: number;
  code: ErrorCodes;
  data: unknown;

  constructor({ status, message, code, data }: CustomError) {
    super();
    this.message = message;
    this.status = status;
    this.code = code;
    this.data = data;
  }
}

export function getErrorMessage(err: unknown) {
  if (err === null || typeof err === 'string') {
    return err;
  }

  if (err instanceof AppError) {
    return err.message;
  }

  if (typeof err === 'object' && 'message' in err) {
    return err.message;
  }

  return null;
}
