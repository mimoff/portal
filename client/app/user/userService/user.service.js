class UserService {
  constructor($http) {
    this.$http = $http;
  }

  getUsers() {
    return this.$http.get('https://test-api.javascript.ru/v1/vbuyanov/users').then(response => response.data);
  }

  createUser(user) {
    return this.$http.post('https://test-api.javascript.ru/v1/vbuyanov/users',user).then(response => response.data);
  }

  updateUser(user) {
    return this.$http.patch('https://test-api.javascript.ru/v1/vbuyanov/users/'+user._id,user).then(response => response.data);
  }

  deleteUser(user) {
    return this.$http.delete('https://test-api.javascript.ru/v1/vbuyanov/users/'+user._id).then(response => response.data);
  }
}

UserService.$inject = ['$http'];

export default UserService;
