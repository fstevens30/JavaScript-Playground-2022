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



