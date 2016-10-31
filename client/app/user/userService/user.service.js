class UserService {
  constructor($http) {
    this.$http = $http;
  }

  getUsers() {
    return this.$http.get('http://test-api.javascript.ru/v1/vbuyanov/users').then(response => response.data);
  }

  createUser(user) {
    return this.$http.post('http://test-api.javascript.ru/v1/vbuyanov/users',user).then(response => {debugger; return response.data;});
  }

  updateUser(user) {
    return this.$http.patch('http://test-api.javascript.ru/v1/vbuyanov/users/'+user._id,user).then(response => response.data);
  }

  deleteUser(user) {
    debugger;
    return this.$http.delete('http://test-api.javascript.ru/v1/vbuyanov/users/'+user._id).then(response => {debugger; return response.data;});
  }
}

UserService.$inject = ['$http'];

export default UserService;
