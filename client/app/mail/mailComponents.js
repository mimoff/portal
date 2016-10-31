import angular from 'angular';
import MailService from './mailService/mail';
import MailView from './mailView/mailView';
import MailCard from './mailCard/mailCard';
import MailList from './mailList/mailList';
import MailBoxList from './mailboxList/mailboxList';

let mailModule = angular.module('app.mail', [
  MailService,
  MailView,
  MailCard,
  MailList,
  MailBoxList
])

.name;

export default mailModule;
