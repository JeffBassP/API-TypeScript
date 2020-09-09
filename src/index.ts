import { Router, Request, Response, request } from 'express';
import UserController from './api/v1/domains/User/controllers/UserController'


const routes = Router();
const controller = new UserController();
const prefix = '/users';

routes.get(`${prefix}/`, (
  req: Request,
  res: Response,
  next: Function
) => controller.getUSer()
      .then(result => res.send(result))
      .catch(error => console.log(error))
);

routes.post(`${prefix}/`, (
  req: Request,
  res: Response, 
  next: Function
) => controller.createUser({ ...req.body })
      .then(result => res.send(result))
      .catch(error => console.log(error))
);

routes.put(`${prefix}/:id`, (
  req: Request,
  res: Response,
  next: Function
) => controller.updateUser(req.params, req.body)
      .then(result => res.send(result))
      .catch(error => console.log(error))
);

routes.delete(`${prefix}/:id`, (
  req: Request,
  res: Response,
  next: Function
) => controller.deleteUser(req.params)
      .then(result => res.send(result))
      .catch(error => console.log(error))
);

export default routes;


