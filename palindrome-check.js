/*
//First step is creating a basic function to clean up the string.
//We can do this using replace and toLowerCase.
//Using regex we can remove all non alphanumeric characters from the string.

function exampleStringCleanUp(str) {
  return str.replace(/[^a-zA-Z]/g, '').toLowerCase(); //This regex will remove all non alphanumeric characters and ignores case. then uses the toLowerCase method to convert the string to lowercase.
}
console.log(exampleStringCleanUp("This is a test 1234")) //Returns "thisistest"

//Second step is to create a function to check if the string is a palindrome.
//We can do this using .split to split the string into an array of characters. 
//We then use .reverse to reverse the array.
//Then use .join to join the array back into a string.

//Then the modified string is compaerd to the original string.
//The function will then return true if the string is identical to one another

function isPalindromeExample(str) {
  return exampleStringCleanUp(str) === exampleStringCleanUp(str).split('').reverse().join('');
}
console.log(isPalindrome(exampleStringCleanUp("This is a test 1234"))); //Returns false
console.log(isPalindrome(exampleStringCleanUp("Racecar1"))); //Returns true
*/

//Refactored

function isPalindrome(str) {
  return str.replace(/[^a-zA-Z]/g, '').toLowerCase() === str.replace(/[^a-zA-Z]/g, '').toLowerCase().split('').reverse().join('');
};

console.log(isPalindrome("racecaR1")); //Returns true
console.log(isPalindrome("This is a test 1234")); //Returns false