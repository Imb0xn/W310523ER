function myFunction() {
    document.getElementById("output").innerHTML += 'I Love 6.6 From North Carolina, Michael Joooordannn.</br>';
    console.log('MJJJJJ.\nYeah');


}
// 1. Delay Exectution.
// 2. Run In Parallel.
// setTimeout(myFunction, 3000);

setInterval(myFunction, 3000);

console.log('Hello...');


// Normal Function
function askName() {
    const userName = prompt("Please enter your name:");
    document.getElementById("myName").innerHTML = "My name is "+ userName;
}
setTimeout(askName,2000);



// Anon Function
setTimeout(function askName() {
    const userName = prompt("Please enter your name:");
    document.getElementById("myName").innerHTML = "My name is "+ userName;
},2000);

// Arrow Function

setTimeout(()=> {
    const name = prompt('Please etner your name');
    document.getElementById("myName").innerHTML = name;
},3000);