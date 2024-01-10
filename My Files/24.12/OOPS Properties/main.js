// class Student {
//     first_name;
//     last_name;
//     age;

//     constructor(first_name, last_name) {
//         this.first_name = first_name;
//         this.last_name = last_name;
//     }

//     printToConsole() {
//         console.log(this);
//     }

//     printToHTML(divID) {
//         let html = '';
        
//         for (let element in this) {
//             html += `${element}: ${this[element]}<br>`;
//         }
//         document.getElementById(divID).innerHTML = html;
//     }
// }


// const student1 = new Student('Tomer', 'Sagi');
// student1.age = 45;
// student1.printToConsole();
// student1.printToHTML('divId1');

// const student2 = new Student('John', 'Smith');
// student2.printToConsole();
// student2.printToHTML('divId2');

// const student3 = new Student('Moshe', 'Zichmech');
// student3.printToConsole();
// student3.printToHTML('divId3');


// document.getElementById('btnLoad').addEventListener('click', (event) => {
//     event.target.innerHTML = 'Clicked Me';
//     this.innerWidth = '80';
// });




class Simple_User {
    first_name;
    last_name;
    age;

    
        constructor(first_name, last_name, age) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
    }
        
        sayWelcome () {
        return this.first_name + " " + this.last_name + " " + "Welcome";
    }
}


        function Person() {
            let p1 = new Simple_User("Nir", "Imber", 35);
            console.log(p1);
            console.log(p1.sayWelcome());
        }


Person();