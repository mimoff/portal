import angular from 'angular';
import uiRouter from 'angular-ui-router';
import newsCardComponent from './newsCard.component';

let newsCardModule = angular.module('newsCard', [
  uiRouter
])

.component('newsCard', newsCardComponent)

.name;

export default newsCardModule;
