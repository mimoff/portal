class LoginService {
  constructor($q) {
    this.$q = $q;
    this.logout();
  }

  logout(){
    this.user = null;
    this.pass = null;
  }

  login(user, pass) {
    this.user = user;
    this.pass = pass;
    return this.checkAuth();
  }

  checkAuth() {
    return this.$q((resolve, reject) => {
        if (this.pass == '123') {
          resolve(this.user);
        } else {
          reject('Wrong username or password');
        }
    });
  }

}

LoginService.$inject = ['$q'];

export default LoginService;
