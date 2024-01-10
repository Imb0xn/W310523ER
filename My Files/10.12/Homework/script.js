// Teachers example for the same HW

function getData(countryName) {
    
    const myPromise = new Promise((reslove,reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
        // Check if the response is valid.
        if (xhr.status === 200) {
            console.log(xhr.responseText);
        } else {
            alert(`Error: ${xhr.statusText}`);
        }
    };

    xhr.open('GET', `https://restcountries.com/v3.1/name/${countryName}`)
    xhr.send();
});

return myPromise;
}

function printData () {
    const cName = prompt('Please enter a country name');
    const p = getData(cName); // p -> object oif class promise

p.then((data) => {
    console.log(json.parse(data));
});
}

document.getElementById('btnload').addEventListener('click', printData);



// --------------- My Homework with a little help ------------------

// function getData(countryName) {
//     const apiUrl = `https://restcountries.com/v3.1/name/${countryName}`;

//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open('GET', apiUrl, true);

//         xhr.onload = function () {
//             if (xhr.status === 200) {
//                 const countryData = JSON.parse(xhr.responseText);
//                 resolve(countryData);
//             } else {
//                 reject(new Error(`Error: Unable to fetch data for ${countryName}. Status Code: ${xhr.status}`));
//             }
//         };

//         xhr.onerror = function () {
//             reject(new Error('Network error occurred'));
//         };

//         xhr.send();
//     });
// }

// function displayData(countryName) {
//     getData(countryName)
//         .then(countryData => {
//             // Display the country data
//             document.getElementById('countryData').textContent = JSON.stringify(countryData, null, 2);
//         })
//         .catch(error => {
//             console.error(error);
//             document.getElementById('countryData').textContent = `An error occurred: ${error.message}`;
//             // Display a predetermined image (fallback) when an error occurs
//             document.getElementById('countryImage').src = 'fallback-image.jpg'; // Replace with your fallback image URL
//         });
// }

// function printData() {
//     const countryName = prompt('Enter a country name:');
    
//     if (countryName) {
//         displayData(countryName);
//     } else {
//         console.log('You did not enter a country name.');
//     }
// }

// document.getElementById('getDataButton').addEventListener('click', printData);
