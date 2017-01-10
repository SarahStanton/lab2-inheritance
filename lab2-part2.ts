class SavingsAccount {
    private initialBalance:number;
    private ownerName:string;

    constructor(newBalance:number, newOwner:string, private numOfWithdraws:number = 0) {
        this.initialBalance = newBalance;
        this.ownerName = newOwner;

    }

    public deposit(addAmount:number) {
        this.initialBalance = this.initialBalance + addAmount;
    }
    
    public withdraw(removeAmount:number) {
        this.numOfWithdraws++;
        if (this.numOfWithdraws > 3) {
            console.log("Error: number of withdrawals cannot exceed 3");
        } else {
            this.initialBalance = this.initialBalance - removeAmount;
        }
        
    }

    public checkBalance() {
        console.log("Current Balance: "+this.initialBalance);
        console.log("Account Owner: "+this.ownerName);
    }

}

let mySavingsAccount:SavingsAccount = new SavingsAccount(1000, "Bob");
mySavingsAccount.deposit(500);
mySavingsAccount.withdraw(100);
mySavingsAccount.checkBalance();
mySavingsAccount.withdraw(100);
mySavingsAccount.withdraw(100);
mySavingsAccount.withdraw(100);
mySavingsAccount.checkBalance();
