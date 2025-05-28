class BankAccount {
    private balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    public deposit(amount: number): void {
        this.balance += amount;
    }

    public withdraw(amount: number): void {
        if (this.balance >= amount) {
            this.balance -= amount;
        }
    }

    public getBalance(): number {
        return this.balance;
    }
}

const account = new BankAccount(20);

account.withdraw(30);
console.log(account.getBalance());