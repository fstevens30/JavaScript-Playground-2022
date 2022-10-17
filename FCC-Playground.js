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
    return sum; // return the sum
}

console.log(sumAll([4, 1])); // should return 10

// Diff two arrays

function diffArray(arr1, arr2) { // function takes two arrays as arguments
    var newArr = []; // variable to store the new array
    // Same, same; but different.
    for (let i = 0; i < arr1.length; i++) { // loop through the first array
        if (arr2.indexOf(arr1[i]) === -1) { // if the second array does not contain the current element of the first array
            newArr.push(arr1[i]); // push the element to the new array
        }
    }
    for (let i = 0; i < arr2.length; i++) { // loop through the second array
        if (arr1.indexOf(arr2[i]) === -1) { // if the first array does not contain the current element of the second array
            newArr.push(arr2[i]); // push the element to the new array
        }
    }
    return newArr; // return the new array
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); // should return [4]

// Find the longest word in a string

function findLongestWordLength(str) { // function takes a string as an argument
    let words = str.split(" "); // split the string into an array of words
    let longestWord = 0; // variable to store the length of the longest word
    for (let i = 0; i < words.length; i++) { // loop through the array of words
        if (words[i].length > longestWord) { // if the current word is longer than the longest word
            longestWord = words[i].length; // set the longest word to the current word
        }
    }
    return longestWord; // return the length of the longest word
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); // should return l

// Return largest numbers in each sub array of an array
// Example 
// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [5, 27, 39, 1001]

/*
function largestOfFour(arr) { // function takes an array as an argument
    let largestNums = []; // variable to store the largest numbers
    for (let i = 0; i < arr.length; i++) { // loop through the array
        let largestNum = 0; // variable to store the largest number in the current sub array
        for (let j = 0; j < arr[i].length; j++) { // loop through the current sub array
            if (arr[i][j] > largestNum) { // if the current number is greater than the largest number
                largestNum = arr[i][j]; // set the largest number to the current number
            }
        }
        largestNums.push(largestNum); // push the largest number to the largest numbers array
    }
    return largestNums; // return the largest numbers array
}

console.log(largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
])); // should return [5, 27, 39, 1001]

*/

// This works but doesn't pass the tests because of negative numbers 
// Example largestOfFour([17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]) should return [25, 48, 21, -3]

// Instead of setting the largestNum to 0 set it to the first element of the sub array

// Refarctoring the above function

function largestOfFour(arr) {
    const results = [];
    for (let i = 0; i < arr.length; i++) {
        let largestNumber = arr[i][0];
        for (let j = 1; j < arr[i].length; j++) {
            if (arr[i][j] > largestNumber) {
                largestNumber = arr[i][j];
            }
        }
        results[i] = largestNumber;
    }

    return results;
}

console.log(largestOfFour([
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, -10, 18, 21],
    [-72, -3, -17, -10]
])); // should return [25, 48, 21, -3]