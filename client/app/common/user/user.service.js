class UserService {
  constructor($http) {
    this.$http = $http;
  }
  getUsers() {
    return this.$http.get('http://test-api.javascript.ru/v1/vbuyanov/users').then(response => response.data);
  }
}

UserService.$inject = ['$http'];

export default UserService;
