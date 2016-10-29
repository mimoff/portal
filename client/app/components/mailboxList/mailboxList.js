import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mailboxListComponent from './mailboxList.component';

let mailboxListModule = angular.module('mailboxList', [
  uiRouter
])

.component('mailboxList', mailboxListComponent)

.name;

export default mailboxListModule;
