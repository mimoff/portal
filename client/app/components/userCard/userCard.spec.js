import UserCardModule from './userCard'
import UserCardController from './userCard.controller';
import UserCardComponent from './userCard.component';
import UserCardTemplate from './userCard.html';

describe('UserCard', () => {
  let $rootScope, makeController;

  beforeEach(window.module(UserCardModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new UserCardController();
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
      expect(UserCardTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = UserCardComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(UserCardTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(UserCardController);
      });
  });
});
