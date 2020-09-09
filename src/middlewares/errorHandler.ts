import { Request, Response } from 'express';

import errorHelper from '../common/errors/error-helper';
import ErrorInterface from '../common/errors/ErrorInterface';

const errorHandler = (
  err: ErrorInterface,
  req: Request,
  res: Response,
  next: Function
) => {
  if (!err.statusCode) {
    err = errorHelper.generic.internalServerError();
  };
  res.status(err.statusCode).send({
    customError: err
  });

}

export default errorHandler;
