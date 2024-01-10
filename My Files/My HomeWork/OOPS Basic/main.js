class BasicUser {

    constructor(firstName, lastName, username, password) {
        this.is_login = false; //
        this.first_name = firstName;
        this.last_name = lastName;
        this.username = username;
        this.password = password;

    }
        sayWelcome () {
        return this.first_name + " " + this.last_name + " " + "Welcome";
    }
        changeName(newFirstName, newLastName) {
        this.first_name = newFirstName;
        this.last_name = newLastName;
    }
    

        login(username, password) {
            if (this.username === username && this.password === password) {
                this.is_login = true;
                return true;
            } else { 
                return false;
            }
        }
        logout(){
            this.is_login = false;
        }


        changePassword(oldPassword, newPassword) {
        if (this.password === oldPassword) {
            this.password = newPassword;
            return true;  
        } else {
            return false; 
        }
        }
}
function person() { 
    const user  = new BasicUser('Nir', 'Imber', 'Imb0x', 'Nir123');
    console.log(user.sayWelcome()); 

        user.changeName('Rin', 'Rembi');
    console.log("After name change:", user.sayWelcome());

    if (user.login('Imb0x','Nir123')) {
        console.log("Loging is successfull", user.sayWelcome());
    } else {
        console.log("Login Failed");
    }

        if (user.login('Imb0x', 'WrongPassword')) {
        console.log("Login successful:", user.sayWelcome());
    } else {
        console.log("Login failed");
    }

        if (user.changePassword('Nir123', 'NewPassword123')) {
        console.log("Password changed successfully");
    } else {
        console.log("Password change failed: old password incorrect");
    }

        user.logout();
    console.log("Logged out. Current login status:", user.is_login);
}

person(); 

