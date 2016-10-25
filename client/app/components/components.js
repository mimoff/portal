import angular from 'angular';
import UserCard from './userCard/userCard';
import UserList from './userList/userList';
import MailCard from './mailCard/mailCard';
import MailList from './mailList/mailList';

let componentModule = angular.module('app.components', [
  UserCard,
  UserList,
  MailCard,
  MailList
])

.name;

export default componentModule;
