import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

type ValidationTarget = 'body' | 'query' | 'params';

export const validate = (
  schema: z.ZodSchema,
  target: ValidationTarget = 'body',
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const data =
        target === 'body'
          ? req.body
          : target === 'query'
            ? req.query
            : req.params;

      const validated = schema.parse(data);

      if (target === 'body') {
        req.body = validated;
      } else if (target === 'query') {
        req.query = validated as any;
      } else {
        req.params = validated as any;
      }

      next();
    } catch (error) {
      next(error);
    }
  };
};

// Convenience functions for specific targets
export const validateBody = (schema: z.ZodSchema) => validate(schema, 'body');
export const validateQuery = (schema: z.ZodSchema) => validate(schema, 'query');
export const validateParams = (schema: z.ZodSchema) =>
  validate(schema, 'params');

// Multiple validation in one middleware
export const validateMultiple = (
  validations: { schema: z.ZodSchema; target: ValidationTarget }[],
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      for (const { schema, target } of validations) {
        const data =
          target === 'body'
            ? req.body
            : target === 'query'
              ? req.query
              : req.params;

        const validated = schema.parse(data);

        if (target === 'body') {
          req.body = validated;
        } else if (target === 'query') {
          req.query = validated as any;
        } else {
          req.params = validated as any;
        }
      }
      next();
    } catch (error) {
      next(error);
    }
  };
};
