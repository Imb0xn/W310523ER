function randomNum(num) {
    return Math.floor(Math.random() * num);
}

function printRandom(numlottery) {
    const randomNumber = randomNum(numlottery);
    const numberGen = document.getElementById("randomNumber-container");

    if (numberGen) {
        numberGen.innerHTML = randomNumber;
    }
}

export { printRandom };
