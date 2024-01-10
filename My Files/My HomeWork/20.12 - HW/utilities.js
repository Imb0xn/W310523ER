// // Define the randomNum function
// function randomNum(max) {
//     return Math.floor(Math.random() * max);
// }

// // Define the printRandom function
// export function printRandom() {
//     const randomNumber = randomNum(1000);
//     document.getElementById("randomNumberDiv").innerHTML = randomNumber;
// }


class TimeUtil {
    clock;

    // 'tzIsraelOffset' determines the hour difference between israel and the desired timezone
    // Example, EST: 8 hours behind Israel
    constructor(tzIsraelOffsetHours) {
        console.log(`Created a new instance of 'TimeUtil'`);
        this.clock = new Date();
        this.clock.setMinutes(this.clock.getMinutes() + (tzIsraelOffsetHours * 60));
    }

    displayTimerInDiv(divID) {
        // Create an INTERVAL for continuous time updating
        setInterval(() => {
            const hours = this.clock.getHours().toString().padStart(2, '0');
            const minutes = this.clock.getMinutes().toString().padStart(2, '0');
            const seconds = this.clock.getSeconds().toString().padStart(2, '0');

            document.getElementById(divID).innerHTML = `${hours}:${minutes}:${seconds}`;
        }, 1000);
    }
}

export default TimeUtil;