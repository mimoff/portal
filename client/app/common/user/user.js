import angular from 'angular';
import UserService from './user.service';

const UserModule = angular
  .module('user', [])
  .service('UserService', UserService)
  .name;

export default UserModule;
