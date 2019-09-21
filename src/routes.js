import { Router } from 'express';

const routes = new Router();

routes.post('/users', UserController.index);

routes.post('/users', UserDetailsController.index);

routes.post('/users', UserRepositoriesController.index);

export default routes;