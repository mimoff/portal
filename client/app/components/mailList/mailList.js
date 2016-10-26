import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mailListComponent from './mailList.component';

let mailListModule = angular.module('mailList', [
  uiRouter
])

.component('mailList', mailListComponent)

.name;

export default mailListModule;
