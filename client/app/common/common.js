import angular from 'angular';
//import Navbar from './navbar/navbar';
//import Hero from './hero/hero';
import UserService from './user/user';
import MailService from './mail/mail';

let commonModule = angular.module('app.common', [
//  Navbar,
//  Hero,
  UserService,
  MailService
])

.name;

export default commonModule;
