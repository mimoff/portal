import angular from 'angular';
import uiRouter from 'angular-ui-router';
import newsViewComponent from './newsView.component';

let newsViewModule = angular.module('newsView', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('news', {
      url: '/news',
      component: 'newsView'
    });
})

.component('newsView', newsViewComponent)

.name;

export default newsViewModule;
