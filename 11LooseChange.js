/*a function that takes an amount of US currency in cents, and returns a dictionary/hash which shows the least amount of coins used to make up that amount. The only coin denominations considered in this exercise are: Pennies (1¢), Nickels (5¢), Dimes (10¢) and Quarters (25¢). Therefor the dictionary returned should contain exactly 4 key/value pairs.

Notes:

If the function is passed either 0 or a negative number, the function should return the dictionary with all values equal to 0.
If a float is passed into the function, its value should be rounded down, and the resulting dictionary should never contain fractions of a coin.
Examples
loose_change(56)    ==>  {'Nickels': 1, 'Pennies': 1, 'Dimes': 0, 'Quarters': 2}
loose_change(-435)  ==>  {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0}
loose_change(4.935) ==>  {'Nickels': 0, 'Pennies': 4, 'Dimes': 0, 'Quarters': 0}

1. approach 1:
    I'm thinking all the numbers needed to be divded by four coin types
        during each, reminder will be further checked
        so I'm checking there should be functions for Dimes, Pennies, and Nickels too

*/


function findQuarter(myObj, num) {
    myObject.Quarters = Math.floor(Math.floor(num) / 25)
}

function looseChange(cents){
    // if less than or equal to zero, then all empty
    var myObject = {
        Nickels: 0, 
        Pennies: 0, 
        Dimes: 0, 
        Quarters: 0
    }
    if (Math.floor(cents) <= 0) {
        return myObject
    } else if (Math.floor(cents) / 25 >= 1) {
        // assigning Quarters


    }

  }


  console.log(looseChange(-435))

/*
lesson learned:
1. javascript's objects have string values for it's attribute labels
    var myObject = {
        Nickels: 0, 
        Pennies: 0, 
        Dimes: 0, 
        Quarters: 0
    } 
    the object above have the same output as
    {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0}

*/