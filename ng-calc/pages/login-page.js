class LoginPage{
    constructor() {
        this.path = '/login';
        this.email = element(by.id('login_email'));
        this.password = element(by.id('login_password'));
        this.btnLogin = element(by.css('.loginButton'));
        this.errorMessage = element(by.css('.alert-login'));
    }
    with(userEmail, userPassword){
        this.email.sendKeys(userEmail);
        this.password.sendKeys(userPassword);
        this.btnLogin.click();
    }
}
module.exports = LoginPage;