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

//Ali example
const isEven = (string) => string.length % 2 == 0
console.log(isEven("Four"))

