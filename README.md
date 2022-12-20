# CommentSold

This CommentSold repo uses playwright to automate the below list of scenarios. 

### For this project, we’d like you to automate:
1. Create a new email account here
    > https://qatest.commentsoldrt.com/webstore-register?destination=/account
2. Purchase an item using a credit card.
3. Logout
4. Log back in here: https://qatest.commentsoldrt.com/webstore-login?destination=/account
5. Purchase an item using using a credit card and coupon.
6. Logout


## Getting Started

*	Clone repository
*	run `npm install`
*	run `npx playwright test --debug` OR `npx playwright test`

### API Automation Thought Exercise

Added comments in some of the areas in which I would automate the API, rather than the UI.

### Coding Problem 

```const arr = [2,7,9,0]

var plusOne = function(digits) {
  let i = digits.length;
  let carry = 1;
  let tmp;
  const res = [];
  while(i > 0 || carry) {
    tmp = (--i >= 0 ? digits[i] : 0) + carry;
    carry = tmp / 10 | 0;
    res.unshift(tmp % 10);
  }
  console.log(res)
  return res;
};

plusOne(arr)```
