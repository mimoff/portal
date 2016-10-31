class MailListController {
  constructor(MailService) {
    this.name = 'mailList';
    this._MailService = MailService;
  }
  $onInit() {
    this.emails = [];
    //this._MailService.getMails(this.mailbox).then(response => this.emails = response);
  }

  $onChanges(changes) {
    if (changes.mailbox && changes.mailbox.currentValue) {
      this.emails = [];
      this._MailService.getMails(this.mailbox).then(response => {this.emails = response; this.onSelect({mail: this.emails[0]})});
    }
  }
}

MailListController.$inject = ['MailService'];

export default MailListController;
