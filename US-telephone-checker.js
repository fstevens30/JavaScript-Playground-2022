function checkTel(tel) {
    //First remove all non-numeric characters from the string.
    var tel = tel.replace(/[^a-zA-Z0-9]/g, '');
    //If statement to check if the tel is either 10 or 11 characters long.
    if (tel.length === 10 ) {
        return true; //If the tel is 10 characters long return true.
    }
    else if (tel.length === 11) {
        if(tel[0] === '1') { //If the first character is 1 return true.
            return true;
        } else { //If the first character is not 1 return false.
            return false;
        }
    } else { //If the tel is not 10 or 11 characters long return false.
        return false;
    }
}

console.log(checkTel("1-555-555-5555")); //Returns false