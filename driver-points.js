class Driver {
    constructor(
        driverFirstName,
        driverLastName,
        driverNumber,
        raceOneQualifying,
        raceOneSprint,
        raceOneEndurance,
        raceOneFastestLap,
    ) {
        this.driverFirstName = String(driverFirstName);
        this.driverLastName = String(driverLastName);
        this.driverNumber = Number(driverNumber);
        this.raceOneQualifying = Number(raceOneQualifying);
        this.raceOneSprint = Number(raceOneSprint);
        this.raceOneEndurance = Number(raceOneEndurance);
        this.raceOneFastestLap = Boolean(raceOneFastestLap);

    }

    // Function to calculate the total points for the driver
    get driverPoints() {
        let points = 0;
        const qualiPoints = [10, 8, 6, 5, 4, 3, 2, 1];
        const sprintPoints = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];
        const endurancePoints = [100, 48, 24, 12, 10, 8, 6, 4, 2, 1];
        const fastestLapPoints = 20;

        // calculate points for qualifying
        if (this.raceOneQualifying <= 8) {
            points += qualiPoints[this.raceOneQualifying - 1];
        }

        // calculate points for sprint
        if (this.raceOneSprint <= 10) {
            points += sprintPoints[this.raceOneSprint - 1];
        }

        // calculate points for endurance
        if (this.raceOneEndurance <= 10) {
            points += endurancePoints[this.raceOneEndurance - 1];
        }

        // calculate points for fastest lap
        if (this.raceOneFastestLap === true) {
            points += fastestLapPoints;
        }

        // return total points
        return points;
    }


    // Function to show the driver details
    get driverProfile() {
        return `${this.driverFirstName} ${this.driverLastName} (${this.driverNumber})`;
    }
}

// Create an array of drivers
const drivers = [
    new Driver('Lewis', 'Hamilton', 44, 1, 1, 1, true),
    new Driver('Valtteri', 'Bottas', 77, 2, 2, 2, false),
    new Driver('Max', 'Verstappen', 33, 3, 3, 3, false),
    new Driver('Lando', 'Norris', 4, 4, 4, 4, false),
    new Driver('Charles', 'Leclerc', 16, 5, 5, 5, false),
    new Driver('Carlos', 'Sainz', 55, 6, 6, 6, false),
    new Driver('Pierre', 'Gasly', 10, 7, 7, 7, false),
    new Driver('Sergio', 'Perez', 11, 8, 8, 8, false),
    new Driver('Esteban', 'Ocon', 31, 9, 9, 9, false),
    new Driver('Lance', 'Stroll', 18, 10, 10, 10, false),
    new Driver('Fernando', 'Alonso', 14, 11, 11, 11, false),
    new Driver('Sebastian', 'Vettel', 5, 12, 12, 12, false),
    new Driver('Yuki', 'Tsunoda', 22, 13, 13, 13, false),
    new Driver('Daniel', 'Ricciardo', 3, 14, 14, 14, false),
    new Driver('George', 'Russell', 63, 15, 15, 15, false),
    new Driver('Nicholas', 'Latifi', 6, 16, 16, 16, false),
    new Driver('Mick', 'Schumacher', 47, 17, 17, 17, false),
    new Driver('Alexander', 'Albon', 23, 18, 18, 18, false),
    new Driver('Guan Yu', 'Zhou', 99, 19, 19, 19, false),
    new Driver('Kevin', 'Magnussen', 20, 20, 20, 20, false),
];

// Using the drivers array to return a driver profile and points

// Lewis Hamilton
console.log(drivers[0].driverProfile);
console.log(drivers[0].driverPoints);

// Max Verstappen
console.log(drivers[2].driverProfile);
console.log(drivers[2].driverPoints);

// George Russell
console.log(drivers[14].driverProfile);
console.log(drivers[14].driverPoints);

// Kevin Magnussen
console.log(drivers[19].driverProfile);
console.log(drivers[19].driverPoints);