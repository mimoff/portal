import template from './mailList.html';
import controller from './mailList.controller';
import './mailList.styl';

let mailListComponent = {
  restrict: 'E',
  bindings: {
    mailbox: '<',
    onSelect: '&'
  },
  template,
  controller
};

export default mailListComponent;
