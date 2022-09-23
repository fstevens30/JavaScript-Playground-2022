// Week 9
//ANCHOR Task 1
// Create a function that takes an array and returns both the minumum 
// and maximum numbers in order 

// function findMinMax(arr){ //declared function findMinMax with array as parameter.
//     let array = []
//     let min = arr[0]
//     let max = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] < min){
//             min = arr[i]
//         }
//         if(arr[i] > max){
//             max= arr[i]
//         }
//     }
//     array.push(min)
//     array.push(max)

//     return array
// }

// console.log(findMinMax([1,2,3,4,5]))

//ANCHOR Task 2
//Create a function that concatentates a number of arrays together
//Example arraysConcat([1,2,3,4,5], [6,7,8,9]) -> [1,2,3,4,5,6,7,8,9]


//My answer not a function but works.
// const arr1 = [1,2,3,4,5];
// const arr2 = [6,7,8,9];
// const arr3 = arr1.concat(arr2);

// console.log(arr3)

//Alis answer
// function concatArray(...args) { //Declared a function with a spread operator
//     return [].concat(...args);
// }
// console.log(concatArray([1,2,3,4], [6,7,8,9]))

// 2nd solution (INSANE)
// const concatArray = (...a) => a.flat(Infinity)
// console.log(concatArray([1,2,3,4,5], [6,7,8,9]))

//ANCHOR Task 3
//Create a function that takes an array of numbers, a string
//and return an array of numbers as per the following rules:
//arrayRules([4,3,2,1], "Asc") -> [1,2,3,4]
//arrayRules([5,6,7,8,9], "Des") -> [9,8,7,6,5]
//arrayRules([4,3,2,1], "None") -> [4,3,2,1]

//Alis solution
// function arrayRules(arr, str){
//     switch(str){
//         case 'Asc':
//             return arr.sort((a,b) =>a-b);
//         case 'Des':
//             return arr.sort((a,b)=>b-a);
//         case 'None':
//             return arr;
//     }
// }
// console.log(arrayRules([1,2,3,4], 'Des'))
// console.log(arrayRules([9,8,7,6], 'Asc'))

//ANCHOR Task 4
//Create a function that returns the total number of items in nested arrays.
//Example: nestedArrays([1,[2,3]]) -> 3
//nestedArrays([1,[2,[3,4]]]) -> 4

const nestedArrays = arr => arr.flat(Infinity).length

console.log(nestedArrays([1,[2,3]]))
