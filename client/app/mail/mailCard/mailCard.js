import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mailCardComponent from './mailCard.component';

let mailCardModule = angular.module('mailCard', [
  uiRouter
])

.component('mailCard', mailCardComponent)

.name;

export default mailCardModule;
