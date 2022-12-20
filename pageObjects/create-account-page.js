const { test, expect } = require('../utils/fixtures');
const chance = require('chance').Chance();

exports.CreateAccount = class CreateAccount {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.name = page.locator('#customer-first-name')
        this.lastName = page.locator('#customer-last-name')
        this.email = page.locator('#customer-email')
        this.password = page.locator('#customer-password')
        this.createAccount = page.getByRole('button', { name: 'Create Account' })
        this.uncheckEmails = page.locator('.email-opt-in-body')
        this.confirm = page.getByText('Confirm')
    }

    async goto() {
        await this.page.goto('https://qatest.commentsoldrt.com/webstore-register?destination=/account');
    }
    async enterName(firstName){ 
        await this.name.click()
        await this.name.fill(firstName)
    }
    async enterLastame(lastName) {
        await this.lastName.click()
        await this.lastName.fill(lastName)
    }
    async enterEmail(email) {
        await this.email.click()
        await this.email.fill(email)
    }
    async enterPassword(password) {
        await this.password.click()
        await this.password.fill(password)
    }
    async clickCreateAccount() {
        await this.createAccount.click()
    }
    async dismissPopUp(){ 
        await this.confirm.click();
    }
}