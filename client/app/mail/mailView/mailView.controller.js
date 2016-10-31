class MailViewController {
  constructor(MailService) {
    this.name = 'mailView';
    this._MailService = MailService;
  }

  $onInit() {
    this.email = null;
    this.box = null;
    //this.mailService.getMails().then(response => this.emails = response);
  }

  onSelectMail(mail) {
    this.email = mail;
  }

  onSelectBox(box) {
    this.email = null;
    this.box = box;
  }
}

MailViewController.$inject = ['MailService'];

export default MailViewController;
