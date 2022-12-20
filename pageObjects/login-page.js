const { expect } = require('@playwright/test');

exports.Login = class Login {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.email = page.locator('#email')
        this.password = page.locator('#password')
        this.logIn = page.getByRole('button', { name: 'Log In' })
        this.logOut = page.getByText('Logout');

    }

    async goto() {
        await this.page.goto('https://qatest.commentsoldrt.com/webstore-login?destination=/account');
    }
    async enterEmail(email) {
        await this.email.click()
        await this.email.fill(email)
    }
    async enterPassword(password) {
        await this.password.click()
        await this.password.fill(password)
    }
    async clickLogin() {
        await this.logIn.click()
    }
    async clickLogOut(){ 
        await this.logOut.click()
    }
}