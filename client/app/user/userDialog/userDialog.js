import angular from 'angular';
import uiRouter from 'angular-ui-router';
import userDialogComponent from './userDialog.component';

let userDialogModule = angular.module('userDialog', [
  uiRouter
])

.component('userDialog', userDialogComponent)

.name;

export default userDialogModule;
