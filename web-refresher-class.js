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


/* 
getTotalPrice([
    {product: "monitor" , quantity: 2 , price: 100},
    {product: "keyboard" , quantity: 1 , price: 50},
    {product: "mouse" , quantity: 1 , price: 20},
    {product: "CPU" , quantity: 1 , price: 200},
    {product: "motherboard" , quantity: 1 , price: 100},
    {product: "RAM" , quantity: 4 , price: 40},
    {product: "HDD" , quantity: 1 , price: 80},
    {product: "GPU" , quantity: 1 , price: 300},
    {product: "speaker" , quantity: 1 , price: 150},
]) 
*/

const totalPrice = (arr) => { //creating totalPrice function that takes an argument of array
    let total = 0; //creating a variable total and setting it to 0
    for (let i = 0; i < arr.length; i++) { //creating a for loop that will run as long as the length of the array is greater than 0
        total += arr[i].quantity * arr[i].price; //the total variable will be added to the quantity of the array multiplied by the price of the array
    }
    return total; //the function will return the total variable
}

console.log(totalPrice([{ product: "monitor", quantity: 2, price: 100 }, ]));

//Refactor using Array.reduce()

const totalPrice2 = (arr) => { //creating totalPrice2 function that takes an argument of array
    return arr.reduce((total, item) => total + item.quantity * item.price, 0); //the function will return the total variable
}
console.log(totalPrice2([{ product: "monitor", quantity: 2, price: 100 }, ]));


//ANCHOR Task 3

//Create a function that takes an array and returns an array with the strings that have digits in them.
//Example: ["1a", "a", "2b", "b"] -> ["1a", "2b"]

function getStringsWithDigits(array) { //creating getStringsWithDigits function that takes an argument of array
    let newArray = []; //creating a new array
    for (let i = 0; i < array.length; i++) { //creating a for loop that will run as long as the length of the array is greater than 0
        if (array[i].match(/\d/)) { //if the array at the index has a digit in it
            newArray.push(array[i]); //the new array will be pushed to the array at the index
        }
    }
    return newArray; //the function will return the new array
}
console.log(getStringsWithDigits(["1a", "a", "2b", "b"])); //calling the function and passing in an array

//Refactoring to ES6

const getDigits = (arr) => { return arr.filter(item => item.match(/\d/)); }; //creating getDigits function that takes an argument of array

console.log(getDigits(["1a", "a", "2b", "b"]));