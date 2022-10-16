// ANCHOR this file contains random code snippets that I have written while learning javascript on freeCodeCamp.org


// NOTE function that checks if the string ends with the given target string
function confirmEnding(str, target) { // function to check if a string ends with a target string takes two arguments string and target
    return str.substr(-target.length) === target; // returns true if the last characters of the string match the target string
}

console.log(confirmEnding("Bastian", "n"));

// The substr() method extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters.

// NOTE function that repeats a given string num times. If num is a negative number return an empty string

// NOTE can be done using the .repeat() method but this task requires a different approach

function repeatStringNumTimes(str, num) { // function takes two arguments string and number
    if (num < 0) { // if the number is negative return an empty string
        return "";
    } else { // else return the string repeated num times
        let newStr = "";
        for (let i = 0; i < num; i++) { // loop through the string num times
            newStr += str; // for each iteration add the string to the new string
        }
        return newStr;
    }
}

console.log(repeatStringNumTimes("abc", 3)); // should return "abcabcabc"

// Doing this task using the .repeat() method

function repeatStr(str, num) {
    return num > 0 ? str.repeat(num) : ""; // Return the string repeated num times if num is greater than 0 else return an empty string
}

console.log(repeatStr("abc", 3));

// NOTE Function that takes two arguments one is a string and the other is a number. The function should truncate the string if it is longer than the given number and add "..." to the end of the string

// E.G truncateString("A-tisket a-tasket A green and yellow basket", 8) should return "A-tisket..."

function truncateString(str, num) {
    if (str.length > num) { // if the string length is greater than the number
        return str.slice(0, num) + "..."; // return the string sliced from 0 to the number and add "..." to the end
    } else {
        return str; // else return the string
    }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); // should return "A-tisket..."

// Sum all numbers in a range

function sumAll(arr) { // function takes an array as an argument
    let sum = 0; // variable to store the sum
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) { // loop through the array from the smallest number to the largest number
        sum += i; // add each number to the sum
    }
    return sum; // return the su
}

console.log(sumAll([4, 1]));