type ErrorCodes = 'unauthorized' | 'bad_request' | 'not_found';

interface CustomError {
  status: number;
  message: string;
  code: ErrorCodes;
  data?: unknown;
}

class AppError extends Error {
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

function getErrorMessage(err: any) {
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

function errorToPlain(err: any) {
  const obj: Record<string, any> = {};
  Object.getOwnPropertyNames(err).forEach((k) => {
    obj[k] = err[k];
  });
  return obj;
}

export { AppError, getErrorMessage, errorToPlain };
