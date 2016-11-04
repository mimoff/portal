import LoginPanelModule from './loginPanel'
import LoginPanelController from './loginPanel.controller';
import LoginPanelComponent from './loginPanel.component';
import LoginPanelTemplate from './loginPanel.html';

describe('LoginPanel', () => {
  let $rootScope, makeController;

  beforeEach(window.module(LoginPanelModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new LoginPanelController();
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
      expect(LoginPanelTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = LoginPanelComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(LoginPanelTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(LoginPanelController);
      });
  });
});
