// Palindrome Checker
// Write a function that returns true if a given string is a palindrome, false otherwise.
// A palindrome is a word that’s the same backwards and forwards.
// For example, “racecar” is a palindrome.

/*
function palindromeCheck(str) {
  var reversed = str.split('').reverse().join('');
  return reversed === str;
}   
console.log(palindromeCheck('racecar'));
*/

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

//remove spaces and format capital letters to lowerscase
//The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. 
//The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. 

const str4 = "My name is Flynn, this is a test.";
const formatted = str4.replace(/\s/g, '').toLowerCase();
console.log(formatted);

//Using Regex
var regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

function removePunctuation(string) {
  return string.replace(regex, '');
}
console.log(removePunctuation('My name is Flynn, this is a test.'));

//Final Solution

function checker(str) {
  var clean = str.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '').toLowerCase().replace(/\s/g, '');
  var reversed = clean.split('').reverse().join('');
  if (clean === reversed) {
    return true;
  } else {
    return false;
  }
}
console.log(checker('A man, a plan, a canal. Panama'));


