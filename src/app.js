/*Week 6 Java-Script
Today we are learining how to setup our workspace.
 NOTE- I'll use VS Code on my left and chrome on my right which has MDN, devtools and github open.
 TODO- Have a look through GiHub student offers and sign up to software for the course.
 NOTE- Javascript is a set of instructions for your website/app to follow.
 NOTE- Console Commands-
 */
console.log("Hello World")
//console.dir(document)
console.table({first:"test",val:9});
console.error("Hello World")

// Lesson Challenge
console.log("Hello World")
var a = "This is my test code for the lesson challenge, I hope it works - Flynn"
console.log(a)

//window.alert() displays alerts in a new window example below
//window.alert("Ooopsie Daisies")
//alert("Hello world!")

//Code Snippet (Alert is commented out as it won't run in VS Code)
var myName = "Flynn";
var myCourse = "JavaScript";
console.log(myName);
//alert("Welcome Traveller!");
var myAge = 20;
console.log(myAge);

/*This code declares two variables myName and myCourse.
Then prints the value of myName in console.
Then prints alert in the browser.
Then declares myAge variable.
Then prints the value of myAge in console.
*/
/*NOTE- (;) Semicolon always ends the statement. It isn't needed for one line but when there is multiple you need to add them at the end of each line.
 NOTE- To add JS to an HTML you can put the code in <script></script>
 NOTE- Another option for this is <script src=".src/JS_File_Name.js"></script>
 NOTE- It is reccomended to make seperate HTML and JS files and link them with the above HTML command.
*/
 /* You can write multiple line comments like this
It won't be rendered out 
*/

//LESSON CHALLENGE

var welcomeMessage = "Welcome to the lesson challenge";
//This declares a variable of welcomeMessage.
console.log(welcomeMessage);
//This prints the variable into the console.
var myName = "Flynn";
//This declares a variable of myName.
console.log(myName);
//This prints the variable into the console.


//Code Snippet
var message;
console.log(message);
//This prints message as undefined as we have not yet defined what the variable says.
message = null 
console.log(message);
//This prints a message of null as we have defined the value of message as (null).
var myLight = false;
console.log(myLight);
//This prints the variable myLight which is false
myLight= true;
if(myLight){
    console.log(myLight);
}
//This
var score1, score2, score3, score4;
//Declared 4 variables in one line of code
var a = "Hello";
var b = 10;
var c = false;
console.log(b);
/*
let newName = "Jeff";
console.log(newName);
*/
//There are two types of scope, Local and Global
//const msg = "Hello World"
//console.log(msg)

/*if(false) {
    const msg = "Hello World"
};
console.log(msg)
*/
//Above is an error because the initial const is a local scope and only lives within the if statement.

if(true) {
    const msg = "Hello World";
    console.log(msg);
}
//Above is not an error because the console.log is inside the local scope of const.

/*Local scope types
* Block scope 
* Function scope
*/
