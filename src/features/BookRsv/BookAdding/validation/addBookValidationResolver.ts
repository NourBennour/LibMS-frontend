import { useCallback } from 'react';
import { ValidationSchema } from './addBookValidationScheme';

export const UseYupValidationResolver = (
  addBookvalidationSchema: typeof ValidationSchema,
) =>
  useCallback(
    async (data) => {
      try {
        const values = await addBookvalidationSchema.validate(data, {
          abortEarly: false,
        });

        return {
          values,
          errors: {},
        };
      } catch (errors) {
        return {
          values: {},
          errors: errors.inner.reduce(
            (allErrors: any, currentError: any) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? 'validation',
                message: currentError.message,
              },
            }),
            {},
          ),
        };
      }
    },
    [addBookvalidationSchema],
  );
