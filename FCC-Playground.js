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

function largestOfFour(arr) { // function takes an array as an argument
    const results = []; // variable to store the largest numbers
    for (let i = 0; i < arr.length; i++) { // loop through the array
        let largestNumber = arr[i][0]; // variable to store the largest number in the current sub array
        for (let j = 1; j < arr[i].length; j++) { // loop through the current sub array
            if (arr[i][j] > largestNumber) { // if the current number is greater than the largest number
                largestNumber = arr[i][j]; // set the largest number to the current number
            }
        }
        results[i] = largestNumber; // push the largest number to the largest numbers array
    }

    return results; // return the largest numbers array
}

console.log(largestOfFour([
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, -10, 18, 21],
    [-72, -3, -17, -10]
])); // should return [25, 48, 21, -3]

//Where do I belong, return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted

//Example getIndexToIns([10, 20, 30, 40, 50], 35) should return 3

function getIndexToIns(arr, num) { // function takes an array and a number as arguments
    arr.sort((a, b) => a - b); // sort the array from smallest to largest
    for (let i = 0; i < arr.length; i++) { // loop through the array
        if (arr[i] >= num) { // if the current number is greater than or equal to the number
            return i; // return the index of the current number
        }
    }
    return arr.length; // if the number is greater than all the numbers in the array return the length of the array
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); // should return 3

//Factorialize a number

function factorialize(num) { // function takes a number as an argument
    let fact = 1; // variable to store the factorial
    for (let i = 1; i <= num; i++) { // loop through the numbers from 1 to the number
        fact *= i; // multiply the factorial by the current number
    }
    return fact; // return the factorial
}

console.log(factorialize(5)); // should return 120

console.log(factorialize(10)); // should return 3628800

// Restrict possible usernames

function checkUsername(username) { // function takes a username as an argument
    let userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i; // regular expression to check if the username is valid
    let result = userCheck.test(username); // test the username against the regular expression
    return result; // return the result
}

console.log(checkUsername("JackOfAllTrades")); // should return true

// Regex examples specific matches 

let word = "Helooooooo";
var threePlus = /Helo{3,}/gi // matches the word Helo with 3 or more o's
console.log(word.match(threePlus)); // should return Helooooooo

let word2 = "Timmmmber";
var onlyFour = /Tim{4}ber/gi // matches the word Tim with 4 o's
console.log(word2.match(onlyFour)); // Should return Timmmmber

let word3 = "Hazzzzah";
let twoToFive = /Haz{2,5}ah/gi // matches the word Haz with 2 to 5 z's
console.log(word3.match(twoToFive)); // should return Hazzzzah

// All or none 

//Uses the ? character to check for zero or one of the preceding element

let allOrNone = "colour"
let regex = /colou?r/gi // matches the word colour or color
console.log(allOrNone.match(regex)); // should return colour

let favWord = "favorite";
let favRegex = /favou?rite/gi // matches the word favorite or favourite
console.log(favWord.match(favRegex)); // should return favorite


// Nested array depth example

let nestedArray = [ // top, or first level - the outer most array
    ['deep'], // an array within an array, 2 levels of depth
    [
        ['deeper'],
        ['deeper'] // 2 arrays nested 3 levels deep
    ],
    [
        [ // an array nested 3 levels deep
            ['deepest'],
            ['deepest'] // 2 arrays nested 4 levels deep
        ],
        [
            [
                ['deepest-est?'] // an array nested 4 levels deep
            ]
        ]
    ]
];

console.log(nestedArray[2][1][0][0][0]); // should return deepest-est?

let myNestedArray = [ // top, or first level - the outer most array
    ['unshift', false, 1, 2, 3, 'complex', 'nested'], // an array within an array, 2 levels of depth
    [
        ['loop', 'shift', 6, 7, 1000, 'deep'], // an array within an array, 3 levels of depth
        [
            ['concat', false, true, 'spread', 'deeper'], // an array within an array, 4 levels of depth
            [
                ['mutate', 1327.98, 'splice', 'slice', 'push'], // Two arrays within an array, 5 levels of depth

                ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'deepest']

            ]
        ]
    ]
];

console.log(myNestedArray[1][1][1][0][0]); // should return mutate
console.log(myNestedArray[1][1][1][1][0]); // should return iterate

// Password checker regex
// Password requirements:
// At least five characters long
// contains at least two consecutive numbers
// contains at least three letters

function passwordCheck(password) { // function takes a password as an argument
    let passwordRegex = /^(?=.*[0-9]{2,})(?=.*[a-z]{3,}).{5,}$/gi; // regular expression to check if the password is valid
    let result = passwordRegex.test(password); // test the password against the regular expression
    return result; // return the result
}

console.log(passwordCheck("abc123")); // should return true
console.log(passwordCheck("abc")); // should return false
console.log(passwordCheck("12456")); // should return false