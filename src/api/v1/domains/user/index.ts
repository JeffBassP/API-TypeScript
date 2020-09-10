import { Router, Request, Response } from 'express';
import UserController from './controllers/UserController';
const routes = Router();
const controller = new UserController();
const prefix = '/users';

routes.get(`${prefix}/`, (
  req: Request,
  res: Response,
  next: Function
) => controller.getUSer()
  .then(result => res.send(result))
  .catch(error => next(error))
);
routes.post(`${prefix}/`, (
  req: Request,
  res: Response,
  next: Function
) => controller.createUSer({ ...req.body })
  .then(result => res.send(result))
  .catch(error => next(error))
);
routes.put(`${prefix}/:id`, (
  req: Request,
  res: Response,
  next: Function
) => controller.updateUser(req.params, req.body)
  .then(result => res.send(result))
  .catch(error => next(error))
);
routes.delete(`${prefix}/:id`, (
  req: Request,
  res: Response,
  next: Function
) => controller.deleteUser(req.params)
  .then(result => res.send(result))
  .catch(error => next(error))
);
export default routes;

