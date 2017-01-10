class Bank {
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

let myAccount:Bank = new Bank(1000, "Bob");
myAccount.deposit(500);
myAccount.withdraw(200);
myAccount.checkBalance();
