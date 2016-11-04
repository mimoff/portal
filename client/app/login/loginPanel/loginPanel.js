import angular from 'angular';
import uiRouter from 'angular-ui-router';
import loginPanelComponent from './loginPanel.component';

let loginPanelModule = angular.module('loginPanel', [
  uiRouter
])

.component('loginPanel', loginPanelComponent)

.name;

export default loginPanelModule;
