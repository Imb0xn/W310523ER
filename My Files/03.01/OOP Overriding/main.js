// import { Animal, Dog, Cat, AdopetedCat, BoughtCats} from './sportModul.js';
import { Vehicle, Car,ElectricCar,DieselCar,PetrolCar,Truck} from './sportModul.js';


function eventHandler() {
    // const animal = new Animal();
    // const apchi = new Dog();
    // const toy = new Dog();
    // const punch = new Dog();
    // const tshirt = new Cat();
    // const jemma = new AdopetedCat();
    // const mizi = new BoughtCats();


    // const arrAnimal  = [animal, apchi, toy, punch, tshirt, jemma, mizi];
    // jemma.speak();

    // for (let a of arrAnimal) {
    //     a.speak();
    // }

const myElectricCar = new ElectricCar();
myElectricCar.startDriving();
myElectricCar.stopDriving();

const myTruck = new Truck();
myTruck.startDriving();
myTruck.stopDriving();

const myCar = new Car();
myCar.startDriving();
myCar.stopDriving();


const myDieselCar = new DieselCar();
myDieselCar.startDriving();
myDieselCar.stopDriving();

const myPetrolCar = new PetrolCar();
myPetrolCar.startDriving();
myPetrolCar.stopDriving();
}

document.getElementById('btnStart').addEventListener('click', eventHandler);