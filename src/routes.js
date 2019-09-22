import { Router } from 'express';

import UserController from './app/controllers/UserController';
import UserDetailsController from './app/controllers/UserDetailsController';
import UserRepositoriesController from './app/controllers/UserRepositoriesController';

const routes = new Router();
const commonUrl = '/api/users';

routes.get(commonUrl, UserController.index);

routes.get(`${commonUrl}/:username/details`, UserDetailsController.index);

routes.get(`${commonUrl}/:username/repos`, UserRepositoriesController.index);

export default routes;
