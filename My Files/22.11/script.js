// function handleUserName(firstName, lastName) {


// const char = firstName.charAt(0).toUpperCase(); // char = first character of firstName
// const charLast = lastName.charAt(0).toUpperCase(); // charLast = first character of LasttName

// const newUserName = char + firstName.slice(1);
// const newUserNameLast = charLast + lastName.slice(1);


// return newUserName +' '+ newUserNameLast;
// }

// ----------------------------------------- //

function getUser() {
    const quickHandleName = (firstName, lastName) => {
        const char = firstName.charAt(0).toUpperCase();
        const charLast = lastName.charAt(0).toUpperCase();

        const newUserName = char + firstName.slice(1);
        const newUserNameLast = charLast + lastName.slice(1);

        return newUserName + ' ' + newUserNameLast;
    };

    const userFirstName = prompt('Please Enter your first name');
    const userLastName = prompt('Please Enter your last name');

    const fullName = quickHandleName(userFirstName, userLastName);
    alert('Hi ' + fullName + ", Welcome back!");
}

getUser();

// ----------------------------------------- //

