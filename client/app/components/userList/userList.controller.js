class UserListController {
  //constructor($http) {
  //  this.name = 'userList';
  //  this.users = [];
  //  $http.get('http://test-api.javascript.ru/v1/vbuyanov/users').then(response => this.users = response.data);
  //}
  constructor(UserService) {
    this.name = 'userList';
    this.userService = UserService;
  }
  $onInit() {
    this.users = [];
    this.userService.getUsers().then(response => this.users = response);
  }}

UserListController.$inject = ['UserService'];
//UserListController.$inject = ['$http'];

export default UserListController;
