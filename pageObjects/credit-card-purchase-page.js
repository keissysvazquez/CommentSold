const { expect } = require('@playwright/test');

exports.CreditCardPurchase = class CreditCardPurchase {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.shop = page.getByRole('banner').getByRole('link', { name: 'Shop' })
        this.mailingListPopUp = page.getByText('Join our mailing listPlus, hear about the latest and greatest from our family of')
        this.mailingList = page.getByRole('button', { name: 'close' })
        this.whatsnew = page.locator('.mb-2 > a').first()
        this.inStock = page.getByLabel('In stock')
        this.glasses = page.getByText('Neon Yellow Retro Squared Sunglasses').first()
        this.addCart = page.getByRole('button', { name: 'Add to Cart' })
        this.goCheckout =  page.getByRole('link', { name: 'Checkout' })
        this.ccLabel = page.locator('#CreditCardLabel')
        this.creditCard = page.frameLocator('internal:attr=[title="Secure card payment input frame"i]').getByPlaceholder('Card number')
        this.experation = page.frameLocator('internal:attr=[title="Secure card payment input frame"i]').getByPlaceholder('MM / YY');
        this.cvc = page.frameLocator('internal:attr=[title="Secure card payment input frame"i]').getByPlaceholder('CVC')
        this.addCC = page.getByText('Add Card')
        this.zip = page.frameLocator('internal:attr=[title="Secure card payment input frame"i]').getByPlaceholder('ZIP')
        this.promotionalEmails = page.getByLabel('YES I would like to receive promotional emails')
        this.pay =  page.getByRole('button', { name: 'Credit card Pay With Card' })
    }
    async goToAccount(){ 
        this.page.goto('https://qatest.commentsoldrt.com/account')
    }
    async gotoShop() {
        await this.shop.click();
    }
    async dismissEmailList(){ 
        await this.mailingListPopUp.waitFor()
        await this.mailingList.click();

    }
    async gotoWhatsNew() {
        await this.whatsnew.click();
    }
    async filterByInStock() {
        await this.inStock.check();
    }
    async goToGlasses() {
        await this.glasses.click()
    }
    async addToCart() {
        await this.addCart.click()
    }
    async goToCheckout() {
        await this.goCheckout.click()
    }
    async addAddress(){ 
        await this.page.getByLabel('Delivery').check();
        await this.page.locator('.shipping-input-containers > div:nth-child(2) > .default-input').fill('123 state st');
        await this.page.locator('#locality').fill('weston');
        await this.page.locator('.address-row > div:nth-child(3) > .default-input').fill('33326');
        await this.page.locator('select[name="state"]').selectOption('FL');
        await this.page.locator('#save-button').click()
    }
    async addCreditCard() {
        await this.ccLabel.click()
    }
    async enterCreditCard() {
        await this.creditCard.fill('4242 4242 4242 4242')
        await this.experation.fill('12 / 50')
        await this.cvc.fill('111')
        await this.zip.fill('33326')
        await this.addCC.click()

    }

    async placeOrder(){ 
        const navigationPromise = this.page.waitForNavigation();
        await this.pay.click()
        await navigationPromise;
    }

    async expectSuccess(){ 
        await expect(this.page).toHaveURL(/.*success/);
    }
}