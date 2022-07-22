// Palindrome Checker
// Write a function that returns true if a given string is a palindrome, false otherwise.
// A palindrome is a word that’s the same backwards and forwards.
// For example, “racecar” is a palindrome.

function palindromeCheck(str) {
  var reversed = str.split('').reverse().join('');
  return reversed === str;
}   
console.log(palindromeCheck('racecar'));

//split() method 
//The split() method splits a String object into an array of strings by separating the string into substrings.

const str = "My name is Flynn, this is a test.";
const words = str.split(' ');
console.log(words[3]);

//reverse() method
//The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

const str2 = [["My"], ["name"], ["is"], ["Flynn"], ["this"], ["is"], ["a"], ["test"]];
const reversed = str2.reverse();
console.log(reversed);

//join() method
//The join() method joins all elements of an array into a string.

const str3 = [["This"], ["is"], ["a"], ["string."]];
const joined = str3.join(' ');
console.log(joined);
