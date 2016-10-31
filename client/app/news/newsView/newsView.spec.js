import NewsViewModule from './newsView'
import NewsViewController from './newsView.controller';
import NewsViewComponent from './newsView.component';
import NewsViewTemplate from './newsView.html';

describe('NewsView', () => {
  let $rootScope, makeController;

  beforeEach(window.module(NewsViewModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new NewsViewController();
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
      expect(NewsViewTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = NewsViewComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(NewsViewTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(NewsViewController);
      });
  });
});
