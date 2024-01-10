class SportsEvent {
    sportName;
    numberOfAthletes;
    dateOfEvent;

    constructor(sportName, numberOfAthletes, dateOfEvent) {
        this.sportName = sportName;
        this.numberOfAthletes = numberOfAthletes;
        this.dateOfEvent = dateOfEvent;
    }



    printVariables(){
        console.log(`Name: ${this.sportName}, Number of Participants: ${this.numberOfAthletes}, Date of Competition: ${this.dateOfEvent}`);
    }
}

class Athletics extends SportsEvent {
        trackType;
        trackLength;
    
    constructor(sportName, numberOfAthletes, dateOfEvent,trackType, trackLength) {
        super(sportName, numberOfAthletes, dateOfEvent);
        this.trackType = trackType;
        this.trackLength = trackLength;

    }

    printAtheltics() {
        console.log( `in this event the length of the track is ${this.trackLength} and type of the track is ${this.trackType}`);
    }
}

class Swimming extends SportsEvent {
    swimTechnique;
    poolLength;

    constructor(sportName, numberOfAthletes, dateOfEvent, swimTechnique, poolLength) {
        super(sportName, numberOfAthletes, dateOfEvent);
        this.swimTechnique = swimTechnique;
        this.poolLength = poolLength;

    }
        printSwimming() {
        console.log( `the swimming technique in this run is ${this.swimTechnique} and length of the pull is  ${this.poolLength}`);
    }
}




export default SportsEvent;
export { Athletics };
export { Swimming };