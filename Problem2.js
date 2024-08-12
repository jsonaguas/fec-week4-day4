class Account {
    #balance;

    constructor(accountNumber, balance, owner) {
        this.accountNumber = accountNumber;
        this.#balance = balance;
        this.owner = owner;
    }

    deposit(amount) {
        this.#balance += amount;
        return this.#balance;
    }

    withdraw(amount) {
        if (amount > this.#balance) {
            return "Insufficient funds";
        }
        this.#balance -= amount;
        return this.#balance;
    }

    compoundInterest(rate) {
        this.#balance += this.#balance * rate;
        return this.#balance;
    }

    getBalance() {
        return `Your balance is: ${this.#balance}`;
    }
}

// Example usage
const account1 = new Account(123, 1000, "Thing 1");
const account2 = new Account(456, 500, "Thing 2");

console.log(account1.deposit(500)); // 1500
console.log(account2.getBalance()); // "Your balance is: 500"
console.log(account2.withdraw(100)); // 400
console.log(account2.compoundInterest(0.05)); // 420
console.log(account2.getBalance()); // "Your balance is: 420"