import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import { Prisma } from '../generated/prisma/client';

interface CustomError {
  status: StatusCodes;
  reason: ReasonPhrases | string;
  message: string;
  data?: unknown;
}

/**
 * Base application error.
 *
 * Always throw a specific AppError subclass instead of creating
 * AppError directly. Subclasses centralize HTTP status mapping,
 * improve type safety (instanceof checks), and keep the code DRY.
 */

class AppError extends Error {
  status: StatusCodes;
  reason: ReasonPhrases | string;
  data?: unknown;

  constructor({ status, message, reason, data }: CustomError) {
    super(message);
    this.status = status;
    this.reason = reason;
    this.data = data;

    Error.captureStackTrace(this, this.constructor);
  }
}

class BadRequestError extends AppError {
  constructor(message?: string, data?: unknown) {
    super({
      status: StatusCodes.BAD_REQUEST,
      reason: ReasonPhrases.BAD_REQUEST,
      message: message || ReasonPhrases.BAD_REQUEST,
      data,
    });
  }
}

class NotFoundError extends AppError {
  constructor(message?: string, data?: unknown) {
    super({
      status: StatusCodes.NOT_FOUND,
      reason: ReasonPhrases.NOT_FOUND,
      message: message || ReasonPhrases.NOT_FOUND,
      data,
    });
  }
}

class UnauthorizedError extends AppError {
  constructor(message?: string, data?: unknown) {
    super({
      status: StatusCodes.UNAUTHORIZED,
      reason: ReasonPhrases.UNAUTHORIZED,
      message: message || ReasonPhrases.UNAUTHORIZED,
      data,
    });
  }
}

class MethodNotAllowedError extends AppError {
  constructor(message?: string, data?: unknown) {
    super({
      status: StatusCodes.METHOD_NOT_ALLOWED,
      reason: ReasonPhrases.METHOD_NOT_ALLOWED,
      message: message || ReasonPhrases.METHOD_NOT_ALLOWED,
      data,
    });
  }
}

class ValidationError extends AppError {
  constructor(
    public fields: string[],
    data?: unknown,
  ) {
    super({
      status: StatusCodes.BAD_REQUEST,
      reason: ReasonPhrases.BAD_REQUEST,
      message: 'Validation failed',
      data,
    });
  }
}

class FailedDependencyError extends AppError {
  constructor(reason?: string, message?: string, data?: unknown) {
    super({
      status: StatusCodes.FAILED_DEPENDENCY,
      reason: reason || ReasonPhrases.FAILED_DEPENDENCY,
      message: message || ReasonPhrases.FAILED_DEPENDENCY,
      data,
    });
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

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientInitializationError,
  PrismaClientRustPanicError,
  PrismaClientValidationError,
} = Prisma;

function handlePrismaError(err: any, message: string) {
  if (
    err instanceof PrismaClientKnownRequestError ||
    err instanceof PrismaClientUnknownRequestError ||
    err instanceof PrismaClientInitializationError ||
    err instanceof PrismaClientRustPanicError ||
    err instanceof PrismaClientValidationError
  ) {
    const code = 'code' in err ? (err as any).code : undefined;
    const errorCode = 'errorCode' in err ? (err as any).errorCode : undefined;
    const meta = 'meta' in err ? (err as any).meta : undefined;

    throw new FailedDependencyError(err.message, message, {
      prismaCode: code || errorCode,
      meta,
    });
  }
}

export {
  getErrorMessage,
  errorToPlain,
  handlePrismaError,
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
  ValidationError,
  MethodNotAllowedError,
  FailedDependencyError,
};
