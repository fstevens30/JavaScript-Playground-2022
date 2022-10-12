function confirmEnding(str, target) { // function to check if a string ends with a target string takes two arguments string and target
    return str.substr(-target.length) === target; // returns true if the last characters of the string match the target string
}

console.log(confirmEnding("Bastian", "n"));

// The substr() method extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters.