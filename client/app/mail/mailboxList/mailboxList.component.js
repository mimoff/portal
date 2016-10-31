import template from './mailboxList.html';
import controller from './mailboxList.controller';
import './mailboxList.styl';

let mailboxListComponent = {
  restrict: 'E',
  bindings: {
    onSelect: '&'
  },
  template,
  controller
};

export default mailboxListComponent;
