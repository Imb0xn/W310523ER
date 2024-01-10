import Person from "./user_model.js";
import { Student } from "./user_model.js"; 


function eventHandler() {
    const person1 = new Person('Nir Imber', 'me@google.com');
    person1.presentSelf();

    const student1 = new Student('Gal Svash', 'gal.memem@com');
    student1.presentSelf();
    student1.addGrade(88);
    student1.addGrade(95);
    student1.addGrade(50);
    student1.printGrades();
}

document.getElementById('btnStart').addEventListener('click',eventHandler);