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