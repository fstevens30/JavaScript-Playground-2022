//Points system calculator for V8 Supercars
//Using the points system from the 2022 season

//create class for the races

class Race {
    constructor(raceName, [racepoints]) { // Constructor takes a variable of raceName and an array of points availible for the race
        this.raceName = raceName;
        this.racepoints = racepoints;
    }
}

//Create an array of races with availible points

const races = [
    new Race("Sydney", [150, 138, 129, 120, 111, 102, 96, 90, 84, 78, 72, 69, 66, 63, 60, 57, 54, 51, 48, 45, 42, 39, 36, 33, 30, 27, 24, 21, 18, 15]),
]