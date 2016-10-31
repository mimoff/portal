import template from './userDialog.html';
import controller from './userDialog.controller';
import './userDialog.styl';

let userDialogComponent = {
  restrict: 'E',
  bindings: {
    resolve: '<',
    close: '&',
    dismiss: '&'
  },
  template,
  controller
};

export default userDialogComponent;
