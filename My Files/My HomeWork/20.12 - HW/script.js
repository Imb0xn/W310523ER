// import { printRandom } from './utilities.js';

// // Run the printRandom function
// printRandom();

//  OOp 1

// class Animal {
//     constructor(name, type, legs, environment) {
//         this.name = name;
//         this.type = type;
//         this.legs = legs;
//         this.environment = environment;
//     }

//     printSummary ()   {
// console.log(`${this.name} is a ${this.type} with ${this.legs} legs living in ${this.environment}.`);
//     }
// }

// const lion = new Animal("lion", "mammal", 4,"savannah");
// const penguin = new Animal("pengiuin","bird", 2,"arctic");

// lion.printSummary(); 
// penguin.printSummary(); 


// OOP 2



import TimeUtil from "./utilities.js"

function eventHandler() {
    const tIsrael = new TimeUtil(0);
    const tEst = new TimeUtil(-8);
    const tUK = new TimeUtil(-2);

    tIsrael.displayTimerInDiv('clock1');
    tEst.displayTimerInDiv('clock2');
    tUK.displayTimerInDiv('clock3');
}

document.getElementById('btnStart').addEventListener('click', eventHandler);