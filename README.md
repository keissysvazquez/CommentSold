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

```
const array = [2,7,9,0]

function incrementArrayNumber(arr){ 
    let carry = 1; 

    for (let i = arr.length - 1; i >= 0; i --){

        arr[i] += carry; 

        if (arr[i] >= 10 ){ 
            carry = 1; 
            arr[i] -= 10;
        }
        else { 
            carry = 0
            break; 
        }
    }
    if carry === 1 { 
        arr.unshift(1);
    }
    return arr; 
}

console.log(incrementArrayNumber(array))

```
