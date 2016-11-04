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
      component: 'userView',
      resolve: {
        access: ['LoginService', function(LoginService) {
          return LoginService.checkAuth().then( true );
        }]
      }
    });
})

.component('userView', userViewComponent)

.name;

export default userViewModule;
