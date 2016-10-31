import angular from 'angular';
import UserService from './userService/user';
import UserView from './userView/userView';
import UserCard from './userCard/userCard';
import UserList from './userList/userList';
import UserDialog from './userDialog/userDialog';

let userModule = angular.module('app.user', [
  UserService,
  UserView,
  UserCard,
  UserList,
  UserDialog,
])

.name;

export default userModule;
