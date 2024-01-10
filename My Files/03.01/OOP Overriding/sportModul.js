// class Animal {
//     speak() {
//         console.log("The animal makes a sound");
//     }
// }

// class Dog extends Animal {
//     // overrides super class method speak()
//     speak() {
//             super.speak();
//             console.log("Woof Woof");

//     }
// }
// class Cat extends Animal {
//         // overrides super class method speak()

//     speak() {
//         super.speak();
//         console.log("Maw Maw");

//     }
// }



// class AdopetedCat extends Cat {
//         speak() {
//         super.speak();
//         console.log("Expensive Meow Meow");

//     }
// }


// class BoughtCats extends Cat {
//         speak() {
//         super.speak();
//         console.log("Cheap Meow Meow");

//     }
// }


// export {
//     Animal,Dog,Cat, AdopetedCat, BoughtCats
// }








// Base class: Vehicle
class Vehicle {
    startDriving() {
        setTimeout(() => console.log("Started Driving"), 2000);
    }

    stopDriving() {
        setTimeout(() => console.log("Stopped Driving"), 2000);
    }
}

class Car extends Vehicle {
    startDriving() {
        super.startDriving();
    }

    stopDriving() {
        super.stopDriving();
    }
}

class Truck extends Vehicle {
    startDriving() {
        setTimeout(() => console.log("Truck is starting up"), 2000);
    }

    stopDriving() {
        setTimeout(() => console.log("Truck is stopping"), 2000);
    }
    }

class ElectricCar extends Car {
    startDriving() {
        setTimeout(() => console.log("ElectricCar is starting up"), 2000);
    }

    stopDriving() {
        setTimeout(() => console.log("ElectricCar is stopping"), 2000);
    }
}

class DieselCar extends Car {
    startDriving() {
        setTimeout(() => console.log("DieselCar is starting up"), 2000);
    }

    stopDriving() {
        setTimeout(() => console.log("DieselCar is stopping"), 2000);
    }
}

class PetrolCar extends Car {
    startDriving() {
        setTimeout(() => console.log("PetrolCar is starting up"), 2000);
    }

    stopDriving() {
        setTimeout(() => console.log("PetrolCar is stopping"), 2000);
    }
}








export { Vehicle, Car,ElectricCar,DieselCar,PetrolCar,Truck};
