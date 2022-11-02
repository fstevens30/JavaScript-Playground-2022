// Cash Register.

/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
*/

function checkCashRegister(price, cash, cid) {
    // Prepare the change.
    var change = cash - price; // Change due.

    // Prepare the cash in drawer.
    var cashInDrawer = cid.reduce(function(acc, next) { // Reduce the cid array to a single value.
        acc.total += next[1]; // Add the value of the current element to the total.
        acc[next[0]] = next[1]; // Set the value of the current element to the key of the same name.
        return acc; // Return the accumulator.
    }, { total: 0 }); // Initialize the accumulator with a total property set to 0.

    // Prepare the change in coins and bills.
    var changeInCoinsAndBills = { // Object for the change in coins and bills.
        'ONE HUNDRED': 100.00,
        'TWENTY': 20.00,
        'TEN': 10.00,
        'FIVE': 5.00,
        'ONE': 1.00,
        'QUARTER': 0.25,
        'DIME': 0.10,
        'NICKEL': 0.05,
        'PENNY': 0.01
    };

    // Prepare the change to be given.
    var changeToBeGiven = []; // Array for the change to be given.


    // Check if the cash in drawer is less than the change due.
    if (cashInDrawer.total < change) { // If the cash in drawer is less than the change due.
        return { status: 'INSUFFICIENT_FUNDS', change: changeToBeGiven }; // Return the status and change to be given.
    }

    // Check if the cash in drawer is equal to the change due.
    if (cashInDrawer.total === change) { // If the cash in drawer is equal to the change due.
        return { status: 'CLOSED', change: cid }; // Return the status and cash in drawer.
    }

    // Check if the cash in drawer is greater than the change due.
    for (var coinAndBill in changeInCoinsAndBills) { // For each coin and bill in the change in coins and bills.
        var value = changeInCoinsAndBills[coinAndBill]; // Value of the current coin and bill.
        var amount = cashInDrawer[coinAndBill]; // Amount of the current coin and bill.
        var amountToBeGiven = 0; // Amount to be given of the current coin and bill.
        while (change >= value && amount >= value) { // While the change due is greater than or equal to the value of the current coin and bill and the amount of the current coin and bill is greater than or equal to the value of the current coin and bill.
            change -= value; // Subtract the value of the current coin and bill from the change due.
            amount -= value; // Subtract the value of the current coin and bill from the amount of the current coin and bill.
            amountToBeGiven += value; // Add the value of the current coin and bill to the amount to be given of the current coin and bill.
            change = Math.round(change * 100) / 100; // Round the change due to the nearest hundredth.
        }
        if (amountToBeGiven > 0) { // If the amount to be given of the current coin and bill is greater than 0.
            changeToBeGiven.push([coinAndBill, amountToBeGiven]); // Push the current coin and bill and the amount to be given of the current coin and bill to the change to be given.
        }
    }
    if (changeToBeGiven.length < 1 || change > 0) { // If the change to be given is less than 1 or the change due is greater than 0.
        return { status: 'INSUFFICIENT_FUNDS', change: [] }; // Return the status and an empty array for the change to be given.
    }
    return { status: 'OPEN', change: changeToBeGiven }; // Return the status and the change to be given.
}