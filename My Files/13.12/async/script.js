function generateRandomNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Generate a random number and resolve the promise with it
            const randomNumber = Math.random(); // This generates a random number between 0 and 1
            resolve(randomNumber);
        }, 3000); // 3000 milliseconds or 3 seconds delay
    });
}





async function main() {
    try {
        const randomNumber = await generateRandomNumber();
        document.getElementById('result').textContent = "Random number: " + randomNumber;
    } catch (error) {
        console.error("An error occurred:", error);
    }
}
    document.getElementById('generateButton').addEventListener('click', main);
