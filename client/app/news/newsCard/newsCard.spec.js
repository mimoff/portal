import NewsCardModule from './newsCard'
import NewsCardController from './newsCard.controller';
import NewsCardComponent from './newsCard.component';
import NewsCardTemplate from './newsCard.html';

describe('NewsCard', () => {
  let $rootScope, makeController;

  beforeEach(window.module(NewsCardModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new NewsCardController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(NewsCardTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = NewsCardComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(NewsCardTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(NewsCardController);
      });
  });
});
