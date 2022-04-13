//ANCHOR Week-8 Javascript


//TODO Task 1
//Create a function that takes a number from 1 to 12 and returns a its corrresponding month name as a string.


//ANCHOR Example 1
// function printMonth(arg){
//     // first index is empty so that jan does not equal zero
//     let months = ["", "Janurary", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     return months[arg]
//     }
//     console.log(printMonth(12));


//ANCHOR Example 2 using a switch statement
// function nameOfMonth(num) {
//     let answer = ""
//     switch (num) {
//         case 1:
//             console.log("January");
//             break;
//         case 2:
//             console.log("February");
//             break;
//         case 3:
//             console.log("March");
//             break;
//         case 4:
//             console.log("April");
//             break;
//         case 5:
//             console.log("May");
//             break;
//         case 6:
//             console.log("June");
//             break;
//         case 7:
//             console.log("July");
//             break;
//         case 8:
//             console.log("August");
//             break;
//         case 9:
//             console.log("September");
//             break;
//         case 10:
//             console.log("October");
//             break;
//         case 11:
//             console.log("November");
//             break;
//         case 12:
//             console.log("December");
//             break;
//     }
//     return answer;
// }
// nameOfMonth(12)

//TODO Task 2
//ANCHOR use for assesment
//Write a function that given date (MM/DD/YYYY) return the day of the week as a string.

//MDN Example
// const today = new Date('April 13, 2022 10:30:00');
// const day1 = today.getDay();
// // Sunday - Saturday : 0-6
// console.log(day1)

//Ali example

// function getDay(day) {
//     var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
//     var date = new Date(day)
//     return days[date.getDay()]
// }
// console.log(getDay(03/13/2022))

//TODO Task 3

//Create  a function that returns true if the length of a string
//is even and false if the length is odd

//Tristans example
// function isEven(string) {
//     var len = string.length
//     return (len/2 == Math.round(len/2))
// }
// console.log(isEven("Four"))
// //This logs true because it has four letter which is true.
// console.log(isEven("Three"))
// //This logs false because it has fice letters.

//Ali example ES6
// const isEven = (string) => string.length % 2 == 0
// console.log(isEven("Four"))

//TODO Task 4

//Create a function that takes two arguments, first one is an array and the second is a string.
//indexArray(["Flynn", "Stevens", "NMIT", "Nelson"],"NMIT") -> 2

//MDN Example
// const indexArray = ["Flynn", "Stevens", "NMIT", "Nelson"]
// console.log(indexArray.indexOf("NMIT"));

//Tristans Example
// Function that finds the index of a string in an array
// function getIndex (array, string) {
//     return array.indexOf(string)
// }
// console.log(getIndex(["Q", "W", "R"], "W"))

//Ali Example ES6
// const getIndex = (array, string) => array.findIndex(val => val === string)
// console.log(getIndex(["Q", "W", "R"], "Q"))

//TODO Task 5

//Create a function which returns the total of all odd numbers
//up to and including the number passes in as param.

//Example: oddNumbersSum(5) -> 9 [1+3+5]
//Example: oddNumbersSum(13) -> 49 [1+3+5+7+9+11+13]

// //Ali example
// function addNumbersSum(num){
//     let total = 0
//     for (let i = 1; i <= num; i +=2) {
//         total += i // total = total + i
//     }
//     return total
// }
// console.log(addNumbersSum(13)) // -> prints (49)


//TODO Task 6

// Create a function that takes an array of strings and numbers and filter out the array so it returns only an array of numbers

// function filterOut(arr){
//     return arr.filter(val => Number.isInteger(val))
// }



//TODO Task 7 
//ANCHOR USE THIS FOR ASSESMENT

//Create a function that takes a number as an argument, increment the number by 1

// function addByOne(num){
//     return num + 1
// }
// console.log(addByOne(3)) // This prints 4 (3+1)

//TODO Task 8 

//Create a function that takes a boolean variable and returns it as a string.
//Example: bolToStr(true) -> "True"

//My attempt... IT WORKS!!!!!!

function bolToStr(bool){
    return bool.toString()
}
console.log(bolToStr(true))
console.log(bolToStr(false))

//Rileys answer using Stringify
// const stringify = (bool) => bool?'true':'false'
// console.log(stringify(false));