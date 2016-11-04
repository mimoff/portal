import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import MailComponents from './mail/mailComponents';
import UserComponents from './user/userComponents';
import LoginComponents from './login/loginComponents';
import AppComponent from './app.component';
import 'normalize.css';

angular.module('app', [
    uiRouter,
    uiBootstrap,
    UserComponents,
    MailComponents,
    LoginComponents
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        template: '<div></div>'
      });
  })

  .component('app', AppComponent);
