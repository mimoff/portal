import template from './mailCard.html';
import controller from './mailCard.controller';
import './mailCard.styl';

let mailCardComponent = {
  restrict: 'E',
  bindings: {
    email: "<",
    showtext: "@"
  },
  template,
  controller
};

export default mailCardComponent;
