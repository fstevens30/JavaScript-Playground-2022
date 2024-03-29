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
    new Race("Sydney R1", [150, 138, 129, 120, 111, 102, 96, 90, 84, 78, 72, 69, 66, 63, 60, 57, 54, 51, 48, 45, 42, 39, 36, 33, 30, 27, 24, 21, 18, 15]),
    new Race("Sydney R2", [150, 138, 129, 120, 111, 102, 96, 90, 84, 78, 72, 69, 66, 63, 60, 57, 54, 51, 48, 45, 42, 39, 36, 33, 30, 27, 24, 21, 18, 15]),
]

//Create class for the drivers

class Driver {
    constructor(
        driverFirstName,
        driverLastName,
        driverTeam,
        driverNumber,
    ) {
        this.driverFirstName = String(driverFirstName);
        this.driverLastName = String(driverLastName);
        this.driverTeam = String(driverTeam);
        this.driverNumber = Number(driverNumber);
    }
}

//Create an array of drivers

const drivers = [
    new Driver("Shane", "van Gisbergen", "Red Bull Ampol Racing", 97),
    new Driver("Chaz", "Mostert", "Mobil 1 Optus Racing", 25),
    new Driver("Cam", "Waters", "Monster Energy Racing", 6),
    new Driver("Will", "Davison", "Shell V-Power Racing", 17),
]

//Create class for the driver results

class DriverResult {
    constructor(
        driver,
        result,
    ) {
        this.driver = driver;
        this.result = result;
    }
}

//Create an array of driver results

const driverResults = [
    new DriverResult(drivers[0], [1, 1]),
    new DriverResult(drivers[1], [2, 2]),
    new DriverResult(drivers[2], [3, 3]),
    new DriverResult(drivers[3], [4, 4]),
]

console.log(driverResults[0])
console.log(driverResults[0].driver.driverFirstName);
console.log(driverResults[0].result[0]);