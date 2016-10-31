import angular from 'angular';
import uiRouter from 'angular-ui-router';
import userViewComponent from './userView.component';

let userViewModule = angular.module('userView', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('user', {
      url: '/user',
      component: 'userView'
    });
})

.component('userView', userViewComponent)

.name;

export default userViewModule;
