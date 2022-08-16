//ROT13 converter
const rot13 = (str) => {
    const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const rot13 = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM';
    return str.replace(/[a-zA-Z]/g, letter => rot13[alpha.indexOf(letter)]);
}
console.log(rot13("SERR PBQR PNZC"));

//HOW THIS WORKS
//1. We create a variable called alpha and assign it the value of the string 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
//2. We create a variable called rot13 and assign it the value of the string 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM'
//3. Using the replace method, we replace every letter in the string with the corresponding letter in the rot13 variable.
//4. We print the result to the console.