import UserViewModule from './userView'
import UserViewController from './userView.controller';
import UserViewComponent from './userView.component';
import UserViewTemplate from './userView.html';

describe('UserView', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UserViewModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UserViewController();
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
      expect(UserViewTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = UserViewComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UserViewTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UserViewController);
      });
  });
});
