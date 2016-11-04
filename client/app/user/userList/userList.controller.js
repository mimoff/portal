class UserListController {
  //constructor($http) {
  //  this.name = 'userList';
  //  this.users = [];
  //  $http.get('http://test-api.javascript.ru/v1/vbuyanov/users').then(response => this.users = response.data);
  //}
  constructor($scope,UserService) {
    this.name = 'userList';
    this._$scope = $scope;
    this.userService = UserService;
  }

  $onInit() {
    this.users = [];
    this._$scope.$on('userCreated', (eventname,user) => this.users.push(user));
    this.userService.getUsers().then(response => this.users = response);
  }

  onDeleteUser(user) {
    this.userService.deleteUser(user).then(response => this.$onInit());
  }
}

UserListController.$inject = ['$scope','UserService'];

export default UserListController;
