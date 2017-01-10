class SavingsAccount extends Account{

    constructor(initialBalance:number, ownerName:string, numOfWithdrawals:number) {
        super(initialBalance);
        super(ownerName);
        super(numOfWithdrawals);
    }
    
    public withdraw(removeAmount:number) {
        this.numOfWithdraws++;
        if (this.numOfWithdraws > 3) {
            console.log("Error: number of withdrawals cannot exceed 3");
        } else {
            super.withdraw(removeAmount);
        }
    }
}
