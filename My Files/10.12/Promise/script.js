// function getNumber() {
//   setTimeout(() => {
//     const myNum = Math.random();
//     if (myNum > 0.5) {
//       itWorked(myNum);
//     } else {
//       myError(myNum);
//     }
//   }, 2000);
// };

// function itWorked(myNum) {
//   document.getElementById('app').innerHTML = `${myNum}: Success`;
// }

// function myError(myNum) {
//   document.getElementById('app').innerHTML = `${myNum}: Error`;
// }

/////////////////////////////


// const myPromise = new Promise((resolve, reject) => {

//     setTimeout(() => {
//       const myNum = Math.random();
//       if (myNum > 0.5) {
//         resolve(myNum);
//       } else {
//         reject(myNum);
//       }
//     }, 2000);
//   });

// myPromise
//     .then((data) => {
//         document.getElementById('app').innerHTML = `${data}: Success`;
//     })
//     .catch((error) => {
//         document.getElementById('app').innerHTML = `${error}: Error`;
//     });



const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const myNum = Math.random();
    if (myNum > 0.5) {
      // Make an XMLHttpRequest to fetch user data
      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://your-server-endpoint.com/users', true);

      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          const response = JSON.parse(xhr.responseText);
          resolve(response);
        } else {
          reject("Rejected: Failed to fetch data from the server");
        }
      };

      xhr.onerror = () => {
        reject("Rejected: Network request failed");
      };

      xhr.send();
    } else {
      reject("Rejected: Random number was not greater than 0.5");
    }
  }, 2000);
});

myPromise
  .then(users => {
    // Display the result on the screen
    console.log('Users:', users);
    // You can update the DOM or do whatever you want with the users data here
  })
  .catch(error => {
    alert(error);
  });



  