const { expect } = require('@playwright/test');

exports.CouponOrder = class CouponOrder {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.couponButton = page.getByRole('button', { name: 'Add Code' })
        this.coupon = page.getByPlaceholder('Enter Code')
        this.apply = page.getByText('Apply')
    }

    async addCoupon() {
        await this.couponButton.click()
    }
    async enterCouponCode() {
        await this.coupon.fill('5OFF20')
    }
    async applyDiscount() {
        await this.apply.click()
    }
}