function getOrShowAage() { 
let age: string | null;
const storedAage = localStorage.getItem('age');



if (storedAage == null) {
    age = prompt('Please enter your age: ');

} else {
    alert(`your saved age is: ${storedAage}`);

}

    }

function removeItem() {
    localStorage.removeItem('age'); // Removes ONLY the key provided
    // localStorage.clear(); // Clear the ENTIRE storage, remove everything
}

document.getElementById('btnStart')?.addEventListener('click', () => {

getOrShowData('age');
getOrShowData('name');
getOrShowData('address');   
});



function addGrade() {
    const grade: string | null = prompt('Add Your Grade') as string;

// `. Get aarray from LS
let strFromLS: string = localStorage.getItem('arrGrades') as string;


}




function displayArray() {


}


// Convert string to number - 2 Options:

// Option 1

// Option 2

// Save to 'local storage' - DB

