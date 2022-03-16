//TODO
/*
JavaScript Variables
*/
var fullName = "Flynn Stevens"
var classCode = "503"
console.log(fullName)
console.log(classCode)


// JavaScript Objects
// property_name: "Property_Value"
var full_name = 
{
first_name: "Flynn",
last_name: "Stevens",
course_number:503
}

console.log(full_name)
console.log(full_name.first_name)
console.log(full_name["last_name"])

//JavaScript Functions
function addTwoNumbers(num1, num2) {
 return num1+num2
}
console.log(addTwoNumbers(12,3))

function addThreeNumbers(num1, num2, num3) {
 return num1+num2+num3
}

console.log(addThreeNumbers(10,1,3))

// JavaScript Loops
for(var i=0; i< 10; i++){
    console.log(i)
}

// JavaScript if statements
var number = 9
if (number === 10) {
console.log("answer = " + number)
}
else {
console.log("error")
}

// const and let
let num = 3
console.log(num)

num = "Flynn"
console.log(num)

// JavaScript comments

/**
Hello world
class sdv503
 */

var sdv503 = "javascript"

var x = 3

var fullName = "text"

function foo(p1, p2){
return p2 - p1
}

foo(5, 10)
/*
var new_value = function sum(x1, x2){
return x1 + x2
}
sum(10, 3)
*/
// (=) vs (===)
/* 
Single = sign assigns a value to a variable.
Triple = sign used when comparing two values.
*/

// Statements vs expressions
/*
Statements do things, like declaring variables. (var example)
Expressions produce values, like functions. (if (exapmle1 > example2))
*/

// Statement
/*var x
 if (y >= 0) {
    x = y
} else {
    x = -y
}
function statements(x) {
  if(y >= 0) {
      return x = y
  } else {
      return x = -y
  }
}
*/
//Expression ES6
//var x = y >= 0 ? y : -y

var word = "Flynn"
console.log(word.length)

var obj = {}

obj.foo = 123
console.log(obj)

console.log(word.toUpperCase())

// Javascript values (primitives vs objects)

var obj1 = {}
var obj2 = {}

console.log(obj1 === obj1)

var number_one = 123
var number_two = 123

console.log(number_one === number_two)

// Boolean: true and false
// Numbers: 1234, 12432.4
// Strings: 'asdfg', "asdfg"
// non-values: null and undefined

var str = "stevens"
console.log(str.length = 2)
console.log(str.length)

var numbers = [1, 2, 3, 4, 5]
console.log(numbers[3] = 10)
console.log(numbers)

//Index of arrays start at 0, hence the 3 array prints 4 in this code above.
//Then adding =10 in the brackets () makes the 4 turn into a 10


// Nonvalues
// var nonvalue
// console.log(nonvalue)

function nonvalue(x) {
return x
}

console.log(nonvalue())

var value = []
console.log(nonvalue.first_name)
console.log(typeof value)

//How to check if undefined below,
//if (value === undefined || value === null)
// refactored looks like...
//if (!value)

//These are considered false values...
//false, 0, '', Nan, [], {},











