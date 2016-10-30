class UserCardController {
  constructor($uibModal) {
    this.name = 'userCard';
    this._$uibModal = $uibModal;
  }

  onEdit() {
    let modalInstance = this._$uibModal.open({
      component: 'userDialog',
      resolve: {
        user: () => Object.assign({}, this.user)
      }
    });

    modalInstance.result.then(value => this.user=value);
  }

  onDelete() {
    alert('Delete ' + this.user);
  }
}

UserCardController.$inject = ['$uibModal'];

export default UserCardController;
