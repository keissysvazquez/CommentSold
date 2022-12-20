// @ts-check
const { test, expect } = require('@playwright/test');

const { CreateAccount } = require('../pageObjects/create-account-page');
const { Login } = require('../pageObjects/login-page');
const { CreditCardPurchase } = require('../pageObjects/credit-card-purchase-page');
const { CouponOrder } = require('../pageObjects/coupon-purchase-page');
const { User } = require('../utils/fixtures');

const user = new User();

test('Create new account', async ({ page }) => {
  const createAccount = new CreateAccount(page);
  await createAccount.goto();
  await createAccount.enterName(user.firstName);
  await createAccount.enterLastame(user.lastName);
  console.log(user.email)
  console.log(user.fullPassword)

  await createAccount.enterEmail(user.email);
  await createAccount.enterPassword(user.fullPassword);
  await createAccount.clickCreateAccount();
  await createAccount.dismissPopUp()
});
test('Login to account', async ({ page }) => {
  const login = new Login(page);
  await login.goto();
  await login.enterEmail(user.email);
  await login.enterPassword(user.fullPassword);
  await login.clickLogin();
});

test('Place Order with just a CC', async ({ page }) => {
  const ccPurchase = new CreditCardPurchase(page);
  const login = new Login(page);
  await login.goto(); 
  // would implement code to log in through API, rather than the UI 
  await login.enterEmail(user.email);
  await login.enterPassword(user.fullPassword);
  await login.clickLogin();


  await ccPurchase.gotoShop();
  await ccPurchase.dismissEmailList()
  await ccPurchase.gotoWhatsNew();
  await ccPurchase.filterByInStock();
  await ccPurchase.goToGlasses();
  await ccPurchase.addToCart();
  await ccPurchase.goToCheckout();
  await ccPurchase.addAddress()
  await ccPurchase.addCreditCard();
  await ccPurchase.enterCreditCard();
  await ccPurchase.placeOrder();
  await ccPurchase.expectSuccess()

});
test('Place Order with coupon', async ({ page }) => {
  const ccPurchase = new CreditCardPurchase(page);
  const couponPurchase = new CouponOrder(page);
  const login = new Login(page);
  await login.goto();
// would implement code to log in through API, rather than the UI
  await login.enterEmail(user.email);
  await login.enterPassword(user.fullPassword);
  await login.clickLogin();

  await ccPurchase.gotoShop();
  await ccPurchase.dismissEmailList()
  await ccPurchase.gotoWhatsNew();
  await ccPurchase.filterByInStock();
  await ccPurchase.goToGlasses();
  await ccPurchase.addToCart();
  await ccPurchase.goToCheckout();
  // Coupon 
  await couponPurchase.addCoupon()
  await couponPurchase.enterCouponCode()
  await couponPurchase.applyDiscount()
  //
  await ccPurchase.placeOrder();
  await ccPurchase.expectSuccess()
});
