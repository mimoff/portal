import MailboxListModule from './mailboxList'
import MailboxListController from './mailboxList.controller';
import MailboxListComponent from './mailboxList.component';
import MailboxListTemplate from './mailboxList.html';

describe('MailboxList', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MailboxListModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MailboxListController();
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
      expect(MailboxListTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = MailboxListComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(MailboxListTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MailboxListController);
      });
  });
});
