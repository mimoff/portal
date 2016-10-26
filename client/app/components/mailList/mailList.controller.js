class MailListController {
  constructor(MailService) {
    this.name = 'mailList';
    this.mailService = MailService;
  }
  $onInit() {
    this.emaildetail = null;
    this.emails = [];
    this.mailService.getMails().then(response => this.emails = response);
  }}

MailListController.$inject = ['MailService'];

export default MailListController;
