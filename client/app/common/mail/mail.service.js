class MailService {
  constructor($http) {
    this.$http = $http;
  }
  getMails() {
    //return this.$http.get('http://test-api.javascript.ru/v1/vbuyanov/users').then(response => this.users = response.data);
    return this.$http.get('http://test-api.javascript.ru/v1/vbuyanov/letters').then(response => response.data);
  }
}

MailService.$inject = ['$http'];

export default MailService;
