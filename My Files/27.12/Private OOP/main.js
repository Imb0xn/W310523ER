import BankAccount from "./person.js";


let account1 = new BankAccount(-200)
let account2 = new BankAccount(10000)
let account3 = new BankAccount(25)


console.log(account1.getBalance());
console.log(account2.getBalance());
console.log(account3.getBalance());

account1.setBalance(99.99);
account2.setBalance(-500);
account3.setBalance(0);

console.log(account1)
console.log(account2)
console.log(account3)