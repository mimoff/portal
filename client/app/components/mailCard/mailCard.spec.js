import MailCardModule from './mailCard'
import MailCardController from './mailCard.controller';
import MailCardComponent from './mailCard.component';
import MailCardTemplate from './mailCard.html';

describe('MailCard', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MailCardModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MailCardController();
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
      expect(MailCardTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = MailCardComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(MailCardTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MailCardController);
      });
  });
});
