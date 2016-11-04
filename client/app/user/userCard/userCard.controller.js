class UserCardController {
  constructor($uibModal,UserService) {
    this.name = 'userCard';
    this._$uibModal = $uibModal;
    this._UserService = UserService;
  }

  onEdit() {
    let modalInstance = this._$uibModal.open({
      component: 'userDialog',
      resolve: {
        user: () => Object.assign({}, this.user)
      }
    });

    modalInstance.result.then(value => {
      this._UserService.updateUser(value).then(response => this.user = response);
    });
  }
}

UserCardController.$inject = ['$uibModal','UserService'];

export default UserCardController;
