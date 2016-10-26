import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mailViewComponent from './mailView.component';

let mailViewModule = angular.module('mailView', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('mail', {
      url: '/mail',
      component: 'mailView'
    });
})

.component('mailView', mailViewComponent)

.name;

export default mailViewModule;
