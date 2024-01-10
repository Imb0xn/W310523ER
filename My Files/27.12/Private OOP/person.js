class BankAccount {
    #balance;
    constructor(balance) {
        this.#balance = balance;
    }

    setBalance(balance2) {
        this.#balance = balance2;

    }

    getBalance() {
        return this.#balance;
    }

}

export default BankAccount;