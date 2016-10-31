import MailViewModule from './mailView'
import MailViewController from './mailView.controller';
import MailViewComponent from './mailView.component';
import MailViewTemplate from './mailView.html';

describe('MailView', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MailViewModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MailViewController();
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
      expect(MailViewTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = MailViewComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(MailViewTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MailViewController);
      });
  });
});
