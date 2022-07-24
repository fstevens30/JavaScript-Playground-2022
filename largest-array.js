/*
JavaScript program takes 3 arrays, finds the largest number in each and prints a new array of 3 numbers each is the largest of the original 3 arrays.
e.g [1,2,3], [4,5,6], [7,8,9] -> [3,6,9]
*/
function largestArray(arr1, arr2, arr3) {
  var largest1 = Math.max(arr1[0], arr1[1], arr1[2]);
  var largest2 = Math.max(arr2[0], arr2[1], arr2[2]);
  var largest3 = Math.max(arr3[0], arr3[1], arr3[2]);
  return [largest1, largest2, largest3];
}
console.log (largestArray([1,2,3], [4,5,6], [7,8,9]));
