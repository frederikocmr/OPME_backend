import { Router } from 'express';

import UserController from './app/controllers/UserController';
import UserDetailsController from './app/controllers/UserDetailsController';
import UserRepositoriesController from './app/controllers/UserRepositoriesController';

const routes = new Router();
const commonUrl = 'api/users';

routes.post(commonUrl, UserController.index);

routes.post(`${commonUrl}/:username/details`, UserDetailsController.index);

routes.post(`${commonUrl}/:username/repos`, UserRepositoriesController.index);

export default routes; 