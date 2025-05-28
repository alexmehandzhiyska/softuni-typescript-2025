"use strict";
class BankAccount {
    balance;
    constructor(balance) {
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
        }
    }
    getBalance() {
        return this.balance;
    }
}
const account = new BankAccount(20);
account.withdraw(30);
console.log(account.getBalance());
//# sourceMappingURL=02.js.map