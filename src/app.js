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

//NOTE
//Rileys Answer
const common = (array1, array2) => {
    return array1.filter(elem => array2.includes(elem))
  }
  
  console.log(common([1,2,3,4,5],[1,2,6,7,4,8,9,3]))


//ANCHOR Task 3

//Create a function that reorders the numbers of an element
//in an array based on ascending and descending order.

//EXAMPLE redoes([515, 341, 44, 3], "des" -> [551, 431, 44, 3]

//Our answer NOTE sont Use this ever!
function redoes(arr, order) {
    let newArr = [];
    switch(order) {
    case 'des':
    for(let i = 0 ; i < arr.length; i++) {
       newArr.push (arr.sort((a, b) => b-a));
    };
    return newArr
    case 'asc':
    for(let i = 0; i < arr.length; i++) {
        newArr.push (arr.sort((a, b) => a-b));
    };
    return newArr
}

}
console.log(redoes([515, 341, 44, 3], 'asc'))

//NOTE Rileys Answer 

//ANCHOR TAsk4
/* Given an object with students and the grades that they made on the tests that they took
determine which student has the best test average.

The key will be the students name and value will be an array of their grades.
you will only have to return the students name. You do not need to return their Test Average */

//NOTE Our working 
// class student{
//     constructor(studentName,g1,g2,g3,g4){
//         this.studentName = studentName;
//         this.g1 = g1;
//         this.g2 = g2;
//         this.g3 = g3;
//         this.g4 = g4;
//         this.average = ((g1+g2+g3+g4) /4)
//     }
// }
// let Ali = new student("Ali", 67,84,75,63);
// let James = new student("James", 87,98,64,71);
// let Matt = new student ("Matt",90,58,73,86);
// //console.log(Matt.average)
// function getBest(s1,s2,s3){
//     // array containing students objects
//     let students = [s1,s2,s3]
//     let placeHolder = [];
//     let bestStudent = [];
//     // filter averages
//     for (i = 0; i < students.length; i ++){
//        placeHolder.push(students[i].average)
//     }
//     bestStudent.push(Math.max(... placeHolder))
//     return bestStudent;
// }
// console.log(getBest(Ali,James,Matt));


//NOTE Tristans Answer
// Average student grades and return whoever has the best average

// function getBestStudent(data) {
//     bestgrade = 0
//     bestperson = ""
//     // Loops though each student, averaging and comparing their data    
//     for (let i = 0; i < data.length; i++) {
//         // Sums the grades of a student
//         var sumgrades = data[i].grades.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
//         // Averages the grades
//         var averagegrade = sumgrades/(data[i].grades.length)
//         if (averagegrade > bestgrade){
//             bestgrade = averagegrade
//             bestperson = data[i].name
//         }
//     }
//     return bestperson
// }
// console.log(getBestStudent([
//     {
//         name: "Ali",
//         grades: [12, 100, 41]
//     },
//     {
//         name: "James",
//         grades: [81, 32, 6]
//     },
//     {
//         name: "Matt",
//         grades: [42, 18, 6]
//     }]))

//ANCHOR Object notes

//NOTE Declaring a object is like this...
// let user1 = new Object(); //Object constructor
// let user2= {};//Object literal syntax

//NOTE Literals and properties
// let user = {
//     name: 'John', // by key "name" store value 'John'
//     age: 30, // by key "age" store value 30
// };

//NOTE Property values are accessed using the dot notation
//Get fields of the object
// console.log(user.name);
// console.log(user.age);

//NOTE You can also add new propeties to an object also using the dot notation
//Add properties to an object
// user.isAdmin = true;
// console.log(user.isAdmin)

//NOTE You can also delete info using delete.
// delete user.age;
// console.log(user);

//ANCHOR Exersise 1
/* Write the folowing code, one line for each action
Create an empty object product
Add the property name with the value "laptop"
add the property price with the value 1200
change the value of price to 1000
show the products name and price on screen
Remove the property name from the object
*/

//NOTE My answer...

// let product = {
//     name: 'Laptop',
//     price: 1200
// };
// product.price = 1000;
// console.log(product);
// delete product.name;
// console.log(product);

//NOTE use "in" keyword to check if an object has a certain property
//e.g
// let user = {name: "John", age: 30};
// console.log("age" in user)
// console.log("address" in user)


