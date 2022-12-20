const { test: base } = require('@playwright/test');
const chance = require('chance').Chance();
const { Password } = require('./passwordGen');

const password = new Password();

exports.User = class User {
    /**
 * @param {import('@playwright/test').Page} page
 */
    constructor() {
        this.firstName = chance.first(),
        this.lastName = chance.last(),
        this.email = chance.email(),
        this.fullPassword = password.password()
    }
}
