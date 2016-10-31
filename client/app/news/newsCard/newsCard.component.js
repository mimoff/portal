import template from './newsCard.html';
import controller from './newsCard.controller';
import './newsCard.styl';

let newsCardComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default newsCardComponent;
