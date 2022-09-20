class driverPoints {
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
    get driverPoints() {

    }
    get driverProfile() {
        return `${this.driverNumber}` - `${this.driverFirstName}` - `${this.driverLastName}`;
    }
}

console.log(new driverPoints("Lewis", "Hamilton", 44, 1, 4, 2, true));