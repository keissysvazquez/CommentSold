const { test: base } = require('@playwright/test');
const chance = require('chance').Chance();


exports.User = class User {
    /**
 * @param {import('@playwright/test').Page} page
 */
    constructor() {
        this.firstName = chance.first(),
        this.lastName = chance.last(),
        this.email = chance.email(),
        this.passwordLower= chance.string({ length: 3, casing: 'lower', alpha: true, }),
        this.passwordUpper= chance.string({ length: 3, casing: 'upper', alpha: true, }),
        this.passwordNum = chance.string({ length: 3, numeric: true }),
        this.fullPassword= this.passwordLower + this.passwordUpper + this.passwordNum
    }
}
