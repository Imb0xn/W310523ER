




// const myDate = new Date(); // New instance with a pointer called 'MyDate' to the class Date
// const xhr = new XMLHttpRequest(); // New Instance of class 'XMLHTTPRequest'
// const xhr2 = new XMLHttpRequest(); // New Instance of class 'XMLHTTPRequest'

// const student1 = new Student();
// student1.name = 'Tomer Sagi';

// const student2 = new Student();
// student2.name = 'Sahar Dagan'

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
xhr.send();
