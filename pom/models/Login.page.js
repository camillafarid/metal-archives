const BasePage = require('./Base.page');
class LoginPage extends BasePage {
    constructor(page){
        super(page);

        // selectors
        this.userNameInput =  'input[name="loginUsername"]';
        this.passwordInput =  'input[name="loginPassword"]';
        this.loginBtn = 'button:has-text("Login")';
    }
    /**
     * Method to navigate to Login page using parent's method
     */
    async navigate(){
       await super.navigate(''); 
    }
    /**
     * Method to login using username and password
     * @param {string} username 
     * @param {string} password 
     */
    async login(username, password){
        await this.page.fill(this.userNameInput,username);
        await this.page.fill(this.passwordInput,password);
        await this.page.click(this.loginBtn);
    }
}
module.exports = LoginPage;