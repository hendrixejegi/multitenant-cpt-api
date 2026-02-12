import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import { Prisma } from '../generated/prisma/client';

interface CustomError {
  status: StatusCodes;
  reason: ReasonPhrases | string;
  message: string;
  data?: unknown;
}

class AppError extends Error {
  status: StatusCodes;
  reason: ReasonPhrases | string;
  data: unknown;

  constructor({ status, message, reason, data }: CustomError) {
    super();
    this.status = status;
    this.reason = reason;
    this.message = message;
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

    throw new AppError({
      status: StatusCodes.FAILED_DEPENDENCY,
      reason: err.message || ReasonPhrases.FAILED_DEPENDENCY,
      message,
      data: {
        prismaCode: code || errorCode,
        meta,
      },
    });
  }
}

export { AppError, getErrorMessage, errorToPlain, handlePrismaError };
