class MailboxListController {
  constructor(MailService) {
    this.name = 'mailboxList';
    this._MailService = MailService;
  }
  $onInit() {
    this.boxes = [];
    this._MailService.getBoxes().then(response => this.boxes = response);
  }
}

MailboxListController.$inject = ['MailService'];

export default MailboxListController;
