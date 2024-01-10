
// Function that retreives data from Server
const getUsersFromServer = () => {
    const xhr = new XMLHttpRequest(); // new instance of class 'XMLHttpReqeust'

    xhr.onload = () => {
        // JSON.parse() --> Convert JSON text to Javascript object
        const userObj = JSON.parse(xhr.responseText);
        let userHTML = '';

        for (let user of userObj) {
            userHTML += '';
            const userHTML = `<tr> 
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>${user.address.street}</td>
            </tr>`;

            document.getElementById('myTable').innerHTML = userHTML
        }
    }

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users'); // == READ, Type: 'xhr' in 'Netowrk' tab in 'F12 - Developer Tools'
    xhr.send();
}



// Function that recives array of JS objects and creates a table with the info
const createTableFromUsers = (arrUsers) => {

}
// Controller
const displayUsers = () => {
    
    // 1. Call Server
    const arrUsers = getUsersFromServer();

    // 2. Update UI
    createTableFromUsers(arrUsers);
}

// We will connect the click event to the get users from server ( get info ) 
document.getElementById('load').addEventListener('click', displayUsers);