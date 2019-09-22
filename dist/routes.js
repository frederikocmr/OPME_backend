"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');

var _UserController = require('./app/controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _UserDetailsController = require('./app/controllers/UserDetailsController'); var _UserDetailsController2 = _interopRequireDefault(_UserDetailsController);
var _UserRepositoriesController = require('./app/controllers/UserRepositoriesController'); var _UserRepositoriesController2 = _interopRequireDefault(_UserRepositoriesController);

const routes = new (0, _express.Router)();
const commonUrl = '/api/users';

routes.get(commonUrl, _UserController2.default.index);

routes.get(`${commonUrl}/:username/details`, _UserDetailsController2.default.index);

routes.get(`${commonUrl}/:username/repos`, _UserRepositoriesController2.default.index);

exports. default = routes;
