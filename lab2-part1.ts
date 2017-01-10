class CheckingAccount {
    private initialBalance:number;
    private ownerName:string;

    constructor(newBalance:number, newOwner:string) {
        this.initialBalance = newBalance;
        this.ownerName = newOwner;

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

let myCheckingAccount:CheckingAccount = new CheckingAccount(1000, "Bob");
myCheckingAccount.deposit(500);
myCheckingAccount.withdraw(200);
myCheckingAccount.checkBalance();
