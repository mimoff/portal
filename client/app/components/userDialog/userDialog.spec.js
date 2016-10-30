import UserDialogModule from './userDialog'
import UserDialogController from './userDialog.controller';
import UserDialogComponent from './userDialog.component';
import UserDialogTemplate from './userDialog.html';

describe('UserDialog', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UserDialogModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UserDialogController();
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
      expect(UserDialogTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = UserDialogComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UserDialogTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UserDialogController);
      });
  });
});
