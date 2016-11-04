import angular from 'angular';
import LoginService from './login.service';

const LoginModule = angular
  .module('login', [])
  .service('LoginService', LoginService)
  .name;

export default LoginModule;
