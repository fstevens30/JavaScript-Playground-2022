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


// The following prints the driver profile to the console
console.log(new Driver('Lewis', 'Hamilton', 44, 1, 1, 1, true));

// Declaring Lewis Hamilton as a driver
let LH44 = new Driver('Lewis', 'Hamilton', 44, 1, 1, 1, true);
console.log(LH44.driverProfile);
console.log(LH44.driverPoints);

// Declaring Max Verstappen as a driver
let MV33 = new Driver('Max', 'Verstappen', 33, 2, 2, 2, false);
console.log(MV33.driverProfile);
console.log(MV33.driverPoints);

// Declaring Charles Leclerc as a driver
let CL16 = new Driver('Charles', 'Leclerc', 16, 3, 3, 3, false);
console.log(CL16.driverProfile);
console.log(CL16.driverPoints);

// Declaring Lando Norris as a driver
let LN4 = new Driver('Lando', 'Norris', 4, 4, 4, 4, false);
console.log(LN4.driverProfile);
console.log(LN4.driverPoints);

// Declaring Sergio Perez as a driver
let SP11 = new Driver('Sergio', 'Perez', 11, 5, 5, 5, false);
console.log(SP11.driverProfile);
console.log(SP11.driverPoints);