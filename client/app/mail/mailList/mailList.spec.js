import MailListModule from './mailList'
import MailListController from './mailList.controller';
import MailListComponent from './mailList.component';
import MailListTemplate from './mailList.html';

describe('MailList', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MailListModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MailListController();
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
      expect(MailListTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = MailListComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(MailListTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MailListController);
      });
  });
});
