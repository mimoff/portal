class UserDialogController {
  constructor() {
    this.name = 'userDialog';
  }

  $onInit() {
    this.user = this.resolve.user;
  }

  ok() {
    this.close({$value: this.user});
  }

  cancel() {
    this.dismiss({$value: 'cancel'});
  }
}

export default UserDialogController;
