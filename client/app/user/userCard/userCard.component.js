import template from './userCard.html';
import controller from './userCard.controller';
import './userCard.styl';

let userCardComponent = {
  restrict: 'E',
  bindings: {
    user: '<',
    onDelete: '&'
  },
  template,
  controller
};

export default userCardComponent;
