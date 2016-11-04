import angular from 'angular';
import LoginService from './loginService/login';
import LoginPanel from './loginPanel/loginPanel';

let loginModule = angular.module('app.login', [
  LoginService,
  LoginPanel,
])

.name;

export default loginModule;
