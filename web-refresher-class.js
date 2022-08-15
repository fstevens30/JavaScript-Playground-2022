//A refresher activity for JavaScript in WEB503

//ANCHOR Task one

//create a function that takes an integer (minutes) and converts it to seconds

function convertToSeconds(minutes) { //creating convertToSeconds function that takes an argument of minutes
    return minutes * 60; //the function returns the minutes multiplied by 60
}
console.log(convertToSeconds(1));

//Refactoring to ES6

const convertSec = (mins) => mins * 60;
console.log(convertSec(1));

//ANCHOR Task two

// Create a function that takes an array (only numbers) and returns the first value.

function getFirstValue(array) { //creating getFirstValue function that takes an argument of array
    return array[0]; //the function returns the first value of the array
}
console.log(getFirstValue([1, 2, 3, 4, 5])); //calling the function and passing in an array

//Refactoring to ES6

const getFirst = (arr) => arr[0];
console.log(getFirst([1, 2, 3, 4, 5]));

//ANCHOR Task for SDV503 students only

// Create a function that takes an array of objects (computer items) which will calculate the total price of a built computer and return it as a number.


function calculateTotalPrice(array) { //creating calculateTotalPrice function that takes an argument of array
    let total = 0; //creating a variable total and setting it to 0
    for (let i = 0; i < array.length; i++) { //creating a for loop that will run as long as the length of the array is greater than 0
        total += array[i].price; //the total variable will be added to the price of the array
    }
    return total; //the function will return the total variable
}
console.log(calculateTotalPrice([{ "product": "Dell", "ram": 16, "price": 1200 }]));