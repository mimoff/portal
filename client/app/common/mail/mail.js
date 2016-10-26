import angular from 'angular';
import MailService from './mail.service';

const MailModule = angular
  .module('mail', [])
  .service('MailService', MailService)
  .name;

export default MailModule;
