class Person {

    name;
    age;
    email;
    phone;

    constructor(name,email) {
        this.name = name;
        this.email = email;
    }


    presentSelf() {
        const str = `
            Name: ${this.name}\n
            Email: ${this.email}
        `;
        
        alert("Let Me Introduce myself" + str);
    }
}

    // Student Inherits from Person 
    class Student extends Person {
            grades; // Array of Grades

            constructor() {
                super('','');
                this.grades = []; // מאתחל כדי לבצע פעולות של ערכים על המשתנה
            }

            addGrade(intGrade) {
                this.grades.push(intGrade);
            }
            
            printGrades() {
                for (let grade of this.grades) {
                    console.log(`${grade}\n`);
                }
            }
    
        }


export default Person;
export {
    Student
};