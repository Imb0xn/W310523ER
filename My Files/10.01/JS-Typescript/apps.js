"use strict";
var _a;
function getOrShowAage() {
    let age;
    const storedAage = localStorage.getItem('age');
    if (storedAage == null) {
        age = prompt('Please enter your age: ');
    }
    else {
        alert(`your saved age is: ${storedAage}`);
    }
}
function removeItem() {
    localStorage.removeItem('age'); // Removes ONLY the key provided
    // localStorage.clear(); // Clear the ENTIRE storage, remove everything
}
(_a = document.getElementById('btnStart')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    getOrShowData('age');
    getOrShowData('name');
    getOrShowData('address');
});
function addGrade() {
    const grade = prompt('Add Your Grade');
    // `. Get aarray from LS
    let strFromLS = localStorage.getItem('arrGrades');
}
function displayArray() {
}
// Convert string to number - 2 Options:
// Option 1
// Option 2
// Save to 'local storage' - DB
