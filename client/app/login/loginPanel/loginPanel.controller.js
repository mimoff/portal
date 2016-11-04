class LoginPanelController {
  constructor(LoginService) {
    this.name = 'loginPanel';
    this._LoginService = LoginService;
    this.isAuth = false;
    this.inputUser = 'user@site.com';
    this.inputPass = null;
    this.authUser = null;
  }

  logout()
  {
    this.isAuth = false;
    this.authUser = null;
    this._LoginService.logout();
  }

  login()
  {
    this._LoginService.login(this.inputUser, this.inputPass).then(response => {
      this.isAuth = true;
      this.authUser = response;
      this.authMessage = null;
    },
    response => this.authMessage = response);
  }
}

LoginPanelController.$inject = ['LoginService'];

export default LoginPanelController;
