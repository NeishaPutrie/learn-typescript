/**
 * An online store supports several payment methods.
 * Every payment has:
 * - Transaction ID
 * - Amount
 * 
 * But each payment method processes the transaction differently.
 * -  Credit card's processing fee is 2% of payment amount
 * -  Bank Transfer's processing fee is 5000
 * -  E Wallet's processing 1% of payment amount
 * 
 * Example transactions:
 * ---------------------
 * Credit Card
 * Transaction: TRX001
 * Amount: Rp1,000,000
 * ---------------------
 * Bank Transfer
 * Transaction: TRX002
 * Amount: Rp750,000
 * ---------------------
 * E-Wallet
 * Transaction: TRX003
 * Amount: Rp500,000
 * ---------------------
 */

class Payment {
    constructor(
        public TransactionID: string,
        public amount: number
    ) {}
    calculateFee(): number {
        return 0
    }
}

class CreditCardPayment extends Payment {
    constructor(
        TransactionID: string,
        amount: number
    ){
        super(TransactionID, amount);
    }

    calculateFee(): number {
    return this.amount * 0.02;
    }
}

class BankTransferPayment extends Payment {
    constructor(
        TransactionID: string,
        amount: number
    ){
        super(TransactionID, amount);
    }

    calculateFee(): number {
        return 5000;
    }
}

class EWalletPayment extends Payment {constructor(
    transactionID: string,
    amount: number
  ) {
    super(transactionID, amount);
  }

  calculateFee(): number {
    // 1% dari amount
    return this.amount * 0.01;
  }
}


const creditCardPayment = new CreditCardPayment("TRX001", 1000000);
const bankTransferPayment = new BankTransferPayment("TRX002", 750000);
const eWalletPayment = new EWalletPayment("TRX003", 500000);

const payments: Payment[] = [
    creditCardPayment,
    bankTransferPayment,
    eWalletPayment
];

for (const payment of payments) {
  console.log(`Transaction: ${payment.TransactionID}`);
  console.log(`Amount: Rp${payment.amount.toLocaleString("id-ID")}`);
  console.log(`Fee: Rp${payment.calculateFee().toLocaleString("id-ID")}`);
  console.log("---------------------");
}