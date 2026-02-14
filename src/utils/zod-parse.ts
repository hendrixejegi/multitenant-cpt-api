import z from 'zod';
import { ValidationError } from './error';

export function zodParse<T extends z.ZodTypeAny>(
  Schema: T,
  inputData: unknown,
): z.infer<T> {
  try {
    const result = Schema.parse(inputData);
    return result as z.infer<T>;
  } catch (error) {
    if (error instanceof z.ZodError) {
      const flattened = z.flattenError(error);
      const fields = Object.keys(flattened.fieldErrors);
      throw new ValidationError(fields, flattened);
    }
    throw error;
  }
}
