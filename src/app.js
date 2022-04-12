//ANCHOR Week-8 Javascript

//Create a function that takes a number from 1 to 12 and returns a its corrresponding month name as a string.

function printMonth(arg){
    // first index is empty so that jan does not equal zero
    let months = ["", "Janurary", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[arg]
    }
    console.log(printMonth(12));



