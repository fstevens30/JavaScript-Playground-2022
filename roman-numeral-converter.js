//Roman Neumeral Converter
function convertToRoman(num) {
  var romanNumeral = "";
  var romanNumeralArray = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  var romanNumeralValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  for (var i = 0; i < romanNumeralValue.length; i++) {
    while (num >= romanNumeralValue[i]) {
      romanNumeral += romanNumeralArray[i];
      num -= romanNumeralValue[i];
    }
  }
  return romanNumeral;
}
console.log(convertToRoman(2));
