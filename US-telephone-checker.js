//My first attempt at a telephone checker.
/*
function checkTel(tel) {
    //First remove all non-numeric characters from the string.
    var tel = tel.replace(/[^a-zA-Z0-9]/g, '');
    //If statement to check if the tel is either 10 or 11 characters long.
    if (tel.length === 10 ) {
        return true; //If the tel is 10 characters long return true.
    }
    else if (tel.length === 11) {
        if(tel[0] === "1") { //If the first character is 1 return true.
            return true;
        } else { //If the first character is not 1 return false.
            return false;
        }
    } else { //If the tel is not 10 or 11 characters long return false.
        return false;
    }
}
*/

/*
//How it should work
//First check the lenth of the string. If it is 10 or 11 characters long return keep going.

//Then check if the first character is 1. If it is keep going.

//Check length of a string ignoring all characters except numbers.
function checkLength(str) {
    var str = str.replace(/[^0-9]/g, '');
    return str.length;
}
console.log(checkLength("Hello World")); //Should return 0

//Check if the first character is 1.
function checkFirst(str) {
    if (str[0] === "1") {
        return true;
    } else {
        return false;
    }
}
console.log(checkFirst("Hello World")); //Should return false
console.log(checkFirst("1Hello World")); //Should return true

//Combine these two functions into one.
function checkTel(str) {
    if (checkTel(str[0] === 1)) {
        var clean = str.replace(/[^0-9]/g, '');
        if (clean.length === 10 || clean.length === 11) {
            return true;
        }
    }
    return false;
}
console.log(checkTel("Hello World")); //Should return false
console.log(checkTel("-1 (555) 555 5555")); //Should return true
*/
function telephoneCheck(str){
    var clean = str.replace(/[^0-9]/g, '');
    if (clean.length === 10) {
        return true;
    }
    else if (clean.length === 11 && str[0] === "1") {
        return true;
    } else {
        return false;
    }
}

console.log(telephoneCheck("1-2222-111-2222")); //Should return false

console.log(telephoneCheck("1 (555) 555-5555")); //Should return true

//switch statement to check if the first character is 1.
function telephoneCheck(str){
    switch (str[0]) {
        case "1":
            var clean = str.replace(/[^0-9]/g, '');
            if (clean.length === 10 || clean.length === 11) {
                return true;
            }
            break;
        default:
            return false;
    }
}

//Switch case is the best option but need a way to filter out single brackets

