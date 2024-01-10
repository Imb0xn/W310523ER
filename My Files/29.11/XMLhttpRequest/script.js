let myInterval;

function myFunction() {
    document.getElementById("clear").innerHTML += 'I Love 6.6 From North Carolina, Michael Joooordannn.</br>';
}

function startTimer(){
myInterval = setInterval(myFunction, 3000);
}

function stopTimer() {
    clearInterval(myInterval);
}

document.getElementById("start").addEventListener("click",startTimer);
document.getElementById("stop").addEventListener("click",stopTimer);