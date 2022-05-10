//ANCHOR Week 10

//ANCHOR Task 1 
//NOTE USE FOR ASSESMENT 2
/* Write a function that divides an array into sub arrays
based on n number giving, where n is the length of each sub array
*/
//EXAMPLE 
//  subarrays([1,2,3,4,5,6,7,8,9,10],2) -> [[1,2], [3,4], [5,6], [7,8], [9,10]]

//NOTE
//Answer (DOESNT WORK!!)
// function subarrays(arr, n) {
//     let x = []; //x is an exmpty array
//     let y = []; //y is an empty array
//     for(let i = 0; i > arr.length; i++) { // For loop says that it will start at index zero and increment through each number of arr.
//         x.push(arr(i)) //Pushes i into the new array
//         if(x.length%n === 0) { //If the length of the arr is the same as n number then arr length is 0 and you push an empty arr
//             y.push(x)
//             x = [] //Clearing the new x arr
//         }
//         else {
//             y.push(x) 
//         }
//         return [... new Set(x)] //Creates a new Set object with the updated x array
//     }

// }
// console.log(subarrays([1,2,3,4,5,6,7,8,9,10],2))

//NOTE
//refactored by Ali
const subarrays = (arr, n) => {
    let x = [];
    while (arr.length) {
        x.push(arr.splice(0, n));
    }
    return x;
};
console.log(subarrays([1,2,3,4,5,6,7,8,9,10],2))

//ANCHOR TASK 2
//NOTE Use for assesment
//Create a function that takes two arrrays of numbers
//and returns an array of numbers which are common to both given arrays
//PAIR CODING

//NOTE
//Our answer (CANT EXPLAIN)

// function commonNum(arr1, arr2) { //declaring a function with the arguments of
//     return arr1.filter(function(n){ //filter array 1 and store it in n
//         return arr2.indexOf(n) !== -1 //Minus one becasue arrays always start at zero
//     }
//     )
// }
// console.log(commonNum([1,2,3,4],[3,4,5,6,1]))

//NOTE
//Tristans Answer (VERY NICE)

// function arrCommon(arr, arr2) {
//     finalArr = []
//     // Loops through the first array
//     for (let i = 0; i < arr.length; i++) { //Loops through the first array
//         // Checks if the item is in the other array
//         if (arr2.includes(arr[i])) {
//             finalArr.push(arr[i])
//         }
//     }
//     return finalArr
// }
// console.log(arrCommon([1,2,3,4],[3,4,5,6,1]))

//ANCHOR Task 3