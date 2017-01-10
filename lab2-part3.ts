class Account {
    private initialBalance:number;
    private ownerName:string;
    private numOfWithdrawals:number;

    constructor(newBalance:number, newOwner:string) {
        this.initialBalance = newBalance;
        this.ownerName = newOwner;
        this.numOfWithdrawals = 0;
    }

    public deposit(addAmount:number) {
        this.initialBalance = this.initialBalance + addAmount;
    }
    
    public withdraw(removeAmount:number) {
        this.initialBalance = this.initialBalance - removeAmount;
    }

    public checkBalance() {
        console.log("Current Balance: "+this.initialBalance);
        console.log("Account Owner: "+this.ownerName);
    }
}

class SavingsAccount extends Account{
    constructor(initialBalance:number, ownerName:string, private numOfWithdrawals) {
        super(initialBalance, ownerName);
    }
    
    public withdraw(removeAmount:number) {
        this.numOfWithdrawals++;
        if (this.numOfWithdrawals > 3) {
            console.log("Error: number of withdrawals cannot exceed 3");
        } else {
            super.withdraw(removeAmount);
        }   
    }
}

class CheckingAccount extends Account {

    constructor(initialBalance:number, ownerName:string, private numOfWithdrawals) {
        super(initialBalance, ownerName);
    }
}

let checking = new CheckingAccount(1000, "Bob");
let savings = new SavingsAccount(1000, "Bob");

checking.deposit(500);
checking.withdraw(100);
checking.checkBalance();

savings.deposit(500);
savings.withdraw(100);
savings.withdraw(100);
savings.withdraw(100);
savings.withdraw(100);
savings.checkBalance();