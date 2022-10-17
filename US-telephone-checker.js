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

/*
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

*/

/*
//switch statement to check if the first character is 1.
function telephoneCheck(str){
    //Firstly check that the first character is 1.
    switch (str[0]) {
        case "1":
            var clean = str.replace(/[^0-9()]/g, '');
            if (clean.length === 10 || clean.length === 11) {
                return true;
            } else {
                return false;
            }
            break;
        default:
            return false;
    }

}
console.log(telephoneCheck("1-2222-111-2222")); //Should return false
//The above code works OK but could work better to solve the problem.

*/

/*

//Using the includes method to check if the first character is 1.
function includeMethodExample(str) {
    let clean = str.replace(/[^0-9]/g, '');
    switch (str) {
        case str[0] === "1":
            if (str.includes(")", "(")) {
                if (clean.length === 10 || clean.length === 11) {
                    return true;
                } else {
                    return false;
                }
            } else if (str.includes(")") || str.includes("(")) {
                return false;
            }
            break;
        default:
            return false;

    }
}


console.log(includeMethodExample("1-(2222)-111-2222")); //Should return false

//Refactoring the above code.
function telephoneCheck(str) {
    var clean = str.replace(/[^0-9()]/g, '');
    if (str.includes("1")) {
        if (clean.length === 10 || 11 && str.includes("), (")) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

//Using string includes to check how many instances of a character exist in a string.

function stringIncludes(str) {
    var clean = str.replace(/[^0-9]/g, '');
    if (str.includes("1")) {
        if (clean.includes(")", "(")) {
            if (clean.length === 10 || clean.length === 11) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
}

console.log(stringIncludes("1-222-111-2222")); //Should return false
*/
//Another attempt at the above code.
//Again this doesnt work properly.

/*

function telephoneCheck(str) {
    var cleanstr = str.replace(/[^0-9]/g, '');
    console.log(cleanstr);
    if (str[0].includes("1")) {
        if (cleanstr.length === 10 || 11 && str.includes("(", ")")) { //If the clean str is 10 or 11 characters long and the string includes "(" and ")" return true.
            return true;
        } else if (cleanstr.length === 10 || 11 && str.includes("(")) { //If the clean str is 10 or 11 characters long and the string includes "(" return false.
            return false;
        } else if (cleanstr.length === 10 || 11 && str.includes(")")) { //If the clean str is 10 or 11 characters long and the string includes ")" return false.
            return false;
        } else { //If the clean str is not 10 or 11 characters long return false.   
            return false;
        }
    } else if (!str[0].includes("1") && cleanstr.length === 10) { //If the clean str is 10 characters long and the string does not include "1" return true.
        return true;
    } else {
        return false;
    }


};



console.log(telephoneCheck("1-(222)-111-2222")); //Should return false

*/

//Acceptance criteria
//The number must have 10 digits.
//If the number has 11 digits and the first digit is 1, it is valid.
//If the number includes any other digits in addition to 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, (, ), -, and space, it is invalid.
//If the number has a singular bracket with no matching bracket, it is invalid.

//The number can have the following formats:
//(555)555-5555
//(555) 555-5555
//(555) 555 5555
//555-555-5555
//1 555-555-5555
//1(555)555-5555
//1 555 555 5555
//15555555555

/*

function telephoneCheck(str) {
    let clean = str.replace(/[^0-9]/g, ''); // Remove all non numeric characters.
    let cleanArr = clean.split(""); //Split the clean string into an array.
    console.log(cleanArr); //Log the clean array (for testing purposes)

}

telephoneCheck("1-(222)-111-2222"); //Should return false

//function that checks if there is a bracket with no matching bracket.

function checkBrackets(str) {
    let clean = str.replace(/[^0-9()]/g, '');
    let cleanArr = clean.split("");
    console.log(cleanArr);
    if (cleanArr.includes("(") && cleanArr.includes(")")) {
        return true;
    } else {
        return false;
    }
}

console.log(checkBrackets("1-(222-111-2222")); //Should return false

*/

// ANCHOR Attempt at the above code.

function telephoneCheck(str) {
    let brackets = str.replace(/[^0-9()]/g, ''); // Regex to keep only numbers and brackets for the purpose of checking if there is a bracket with no matching bracket.
    let clean = str.replace(/[^0-9]/g, ''); // Regex to keep only numbers for the purpose of checking if the number is 10 or 11 digits long.


    if (brackets.includes("(") && brackets.includes(")")) { //If the brackets string includes "(" and ")".
        if (clean.length === 10) { //If the clean string is 10 characters long.
            return true;
        } else if (clean.length === 11 && clean[0] === "1") { //If the clean string is 11 characters long and the first character is 1.
            return true;
        } else {
            return false;
        }
    } else if (!brackets.includes("(") && !brackets.includes(")")) { //If the brackets string does not include "(" and ")".
        if (clean.length === 10) { //If the clean string is 10 characters long.
            return true;
        } else if (clean.length === 11 && clean[0] === "1") { //If the clean string is 11 characters long and the first character is 1.
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
};

console.log(telephoneCheck("1-222-111-2222")); //Should return true

console.log(telephoneCheck("222)-111-2222")); //Should return false

console.log(telephoneCheck("1-(222)-111-2222")); //Should return false

console.log(telephoneCheck("1 555 555 5555")); //Should return false


// refactor the if statement into one line.

function telCheck(str) {
    let brackets = str.replace(/[^0-9()]/g, '');
    let clean = str.replace(/[^0-9]/g, '');

    if (brackets.includes("(") && brackets.includes(")") || !brackets.includes("(") && !brackets.includes(")")) {
        if (clean.length === 10 || clean.length === 11 && clean[0] === "1") {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

console.log(telCheck("1-(222)-111-2222")); //Should return true

console.log(telCheck("222)-111-2222")); //Should return false

console.log(telCheck("1 555 555 5555")); //Should return true

// This still doesnt pass all tests.