class UserViewController {
  constructor($scope,$uibModal,UserService) {
    this.name = 'userView';
    this._$scope = $scope;
    this._$uibModal = $uibModal;
    this._UserService = UserService;
  }

    onCreateUser() {
      let modalInstance = this._$uibModal.open({
        component: 'userDialog',
        resolve: {
          user: () => {
            let newUser={
              fullName: 'new user',
              birthdate: '1970-01-01',
              gender: 'M',
              address: 'new address',
              email: 'email@site.com'
            };
            return newUser;
          }
        }
      });

    modalInstance.result.then(value => {
      //this.user=value;
      this._UserService.createUser(value).then(response => this._$scope.$broadcast('userCreated', response));
    });
  }
}

UserViewController.$inject = ['$scope','$uibModal','UserService'];

export default UserViewController;
