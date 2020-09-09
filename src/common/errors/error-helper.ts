import {
  FORBIDDEN,
  NOT_FOUND,
  UNAUTHORIZED,
  UNPROCESSABLE_ENTITY,
  INTERNAL_SERVER_ERROR
} from 'http-status-codes';

import CustomError from './CustomError';
import errorCodes from './error-codes';

const errors = {
  generic: {
    internalServerError: () =>
      new CustomError({
        message: 'Internal Server Error',
        code: errorCodes.generic.INTERNAL_SERVER_ERROR,
        statusCode: INTERNAL_SERVER_ERROR
      }),
    notFound: () =>
      new CustomError({
        message: 'Not Found',
        code: errorCodes.generic.NOT_FOUND,
        statusCode: NOT_FOUND
      }),
    unprocessableEntity: () =>
      new CustomError({
        message: 'Unprocessable Entity',
        code: errorCodes.generic.UNPROCESSABLE_ENTITY,
        statusCode: UNPROCESSABLE_ENTITY
      }),
    unauthorized: () =>
      new CustomError({
        message: 'Unauthorized',
        code: errorCodes.generic.UNAUTHORIZED,
        statusCode: UNAUTHORIZED
      }),
    forbidden: () =>
      new CustomError({
        message: 'Forbidden',
        code: errorCodes.generic.FORBIDDEN,
        statusCode: FORBIDDEN
      })
  }
};

export default errors;