//Roman Neumeral Converter
function convertToRoman(num) {
  var romanNumeral = ""; //empty string
  var romanNumeralArray = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]; //Array of Roman Numeral Strings
  var romanNumeralValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]; //create an array of roman numerals and their values
  for (var i = 0; i < romanNumeralValue.length; i++) { //loop through the array of roman numerals and their values
    while (num >= romanNumeralValue[i]) { //while the number is greater than the value of the roman numeral
      romanNumeral += romanNumeralArray[i]; //add the roman numeral to the string
      num -= romanNumeralValue[i]; //subtract the value of the roman numeral from the number
    }
  }
  return romanNumeral; //   return the string
}
console.log(convertToRoman(2)); // should return "II"
