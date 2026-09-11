/**
 * A digital wallet application stores information about a user's account.
 * 
 * A wallet has:
 * - Owner name
 * - Wallet ID
 * - Balance
 * 
 * For example, Jude Bellingham creates a wallet with:
 * | Property        | Value           |
 * | --------------- | --------------- |
 * | Wallet ID       | WAL001          |
 * | Owner           | Harry Maguire   |
 * | Initial Balance | Rp500,000       |
 * 
 * The application allows the user to:
 * - Deposit money
 * - Withdraw money
 * - Check the current balance
 * However, the balance must not be changed directly from outside the class.
 * 
 * Student Tasks:
 * Create: class DigitalWallet
 * Use:
 * - private balance: number;
 * 
 * The class should provide public methods:
 * - deposit(amount)
 * - withdraw(amount)
 * - getBalance()
 * - showWalletInfo()
 * 
 * Business Rules
 * deposit():
 * - Amount must be greater than 0.
 * 
 * withdraw():
 * - Amount must be greater than 0.
 * - Amount cannot exceed the current balance.
 */

class DigitalWallet {
    walletId: string;
    owner: string
    private Balance: number;

    constructor(walletId: string, owner: string, initialBalance: number) {
        this.walletId = walletId;
        this.owner = owner;
        this.Balance = initialBalance;
    }

    deposit(amount: number number): void {
        if (amount <= 0) {
            console.log(`Deposit failed! amount must more than 0.`);
            return;
        }

        this.Balance += amount;
        console.log(`✅ Deposit successful!`);
        console.log(`   Amount: Rp${amount.toLocaleString('id-ID')}`);
        console.log(`   New Balance: Rp${this.Balance.toLocaleString('id-ID')}\n`);
    }

    withdraw(amount: number): void {
        if (amount <= 0) {
            console.log(`Withdrawal failed! amount must more than 0.`);
            return;
        }
        if (amount > this.Balance) {
             console.log(` Withdrawal failed! Insufficient balance.`);
            console.log(`   Requested: Rp${amount.toLocaleString('id-ID')}`);
            console.log(`   Available: Rp${this.Balance.toLocaleString('id-ID')}\n`);
            return;
        }
          this.Balance -= amount;
        console.log(` Withdrawal successful!`);
        console.log(`   Amount: Rp${amount.toLocaleString('id-ID')}`);
        console.log(`   Remaining Balance: Rp${this.Balance.toLocaleString('id-ID')}\n`);
    }

    getBalance(): number {
        return this.Balance;
    }

    showWalletInfo(): void {
        console.log(`Wallet ID      : ${this.walletId}`);
        console.log(`Owner      : ${this.owner}`);
        console.log(`Balance        : RP${this.getBalance().toLocaleString('id-ID')}`);
    }
}

