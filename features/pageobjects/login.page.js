const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */

    get inputUsername () {
        return $('input[name="username"]');
    }

    get inputPassword () {
        return $('input[name="password"]');
    }

    get btnLogin() {
        return $("//button[contains(@class,'login-button')]");
    }

    get alertError() {
        return $("//div[contains(@class,'alert--error')]");
    }

    get errorMessage() {
        return $("//span[contains(@class,'error-message')]");
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    

    async submitLogin(username,password) {
        await this.inputUsername.click();
        await this.inputUsername.setValue(username);
        await this.inputPassword.click();
        await this.inputPassword.setValue(password);
    }

    async verifySuccessLogin() {
        await expect(browser).toHaveUrl('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    }

    async verifyDisplayAlert() {
        await this.alertError.waitForExist()
        await expect(this.alertError).toBeDisplayed();
    }

    async notFillForm() {
        await this.inputUsername.setValue('');
        await this.inputPassword.setValue('');

    }

    async clickBtnLogin() {
        await this.btnLogin.click();
    }

    async verifyDisplayErrMessage() {
        await expect(this.errorMessage).toBeExisting()
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
