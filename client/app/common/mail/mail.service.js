class MailService {
  constructor($http) {
    this.$http = $http;
  }
  getBoxes() {
    //return this.$http.get('http://test-api.javascript.ru/v1/vbuyanov/users').then(response => this.users = response.data);
    return this.$http.get('http://test-api.javascript.ru/v1/vbuyanov/mailboxes').then(response => response.data);
  }
  getMails(boxId) {
    return this.$http.get('http://test-api.javascript.ru/v1/vbuyanov/letters').then(response => response.data.filter(d => d.mailbox == boxId ) );
  }
/*  getMails(boxId) {
    //return this.$http.get('http://test-api.javascript.ru/v1/vbuyanov/users').then(response => this.users = response.data);
    return this.$http.get('http://test-api.javascript.ru/v1/vbuyanov/letters').then(response => {
      //debugger;
      let res = response.data.filter(d => {
        //debugger;
        return d.mailbox == boxId;
      });
      return res;
    });
  }*/
}

MailService.$inject = ['$http'];

export default MailService;
