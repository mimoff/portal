import angular from 'angular';
import UserView from './userView/userView';
import UserCard from './userCard/userCard';
import UserList from './userList/userList';
import MailView from './mailView/mailView';
import MailCard from './mailCard/mailCard';
import MailList from './mailList/mailList';
import MailBoxList from './mailboxList/mailboxList';

let componentModule = angular.module('app.components', [
  UserView,
  UserCard,
  UserList,
  MailView,
  MailCard,
  MailList,
  MailBoxList
])

.name;

export default componentModule;
