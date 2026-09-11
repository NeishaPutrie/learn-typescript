/**
 * A company has a simple data-processing engine used to analyze transaction records.
 */

const transactions: Transaction[] = [
    {
        id: "TRX001",
        customer: "Alya",
        amount: 850000,
        status: "paid"
    },
    {
        id: "TRX002",
        customer: "Budi",
        amount: 1250000,
        status: "pending"
    },
    {
        id: "TRX003",
        customer: "Citra",
        amount: 450000,
        status: "paid"
    },
    {
        id: "TRX004",
        customer: "Dimas",
        amount: 2100000,
        status: "paid"
    },
    {
        id: "TRX005",
        customer: "Eka",
        amount: 780000,
        status: "cancelled"
    }
];

/** TASKS:
 * - Extract customer's name only in array
 * - Determine Transaction Category with rules below:
 *   - ≥ Rp2,000,000 → HIGH VALUE
 *   - ≥ Rp1,000,000 → MEDIUM VALUE
 *   - < Rp1,000,000 → LOW VALUE
 * - Calculate platform fee:
 *   - Paid transactions → 2%
 *   - Pending transactions → 1%
 *   - Cancelled transactions → 0%
 */

type Transaction = {
    id: string
    customer: string
    amount: number
    status: "paid" | "pending" | "cancelled"
}

type TRANSACTION_CATEGORY = "HIGH VALUE" | "MEDIUM VALUE" | "LOW VALUE"
type TransactionWithCategory = Transaction & { category: TRANSACTION_CATEGORY }
type TransactionWithFee = Transaction & { platformFee: number }

function getCustomerNames(transactions: Transaction[]): string[] {
    return transactions.map(transaction => transaction.customer);
}

function getTransactionCategory(transaction: Transaction): TransactionWithCategory {
    let category: TRANSACTION_CATEGORY;
    
    if (transaction.amount >= 2000000) {
        category = "HIGH VALUE";
    } else if (transaction.amount >= 1000000) {
        category = "MEDIUM VALUE";
    } else {
        category = "LOW VALUE";
    }
    
    return {
        ...transaction,
        category
    };
}

function calculatePlatformFee(transaction: Transaction): TransactionWithFee {
    let platformFee: number;
    
    if (transaction.status === "paid") {
        platformFee = transaction.amount * 0.02; // 2%
    } else if (transaction.status === "pending") {
        platformFee = transaction.amount * 0.01; // 1%
    } else {
        platformFee = 0; // cancelled = 0%
    }
    
    return {
        ...transaction,
        platformFee
    };
}

function processTransactions<T>(
    arr: Transaction[],
    callback: (transaction: Transaction) => T
): T[] {
    return arr.map(transaction => callback(transaction));
}

// Execute tasks
const customerNames = getCustomerNames(transactions);
const categorizedTransactions = processTransactions(transactions, getTransactionCategory);
const transactionsWithFee = processTransactions(transactions, calculatePlatformFee);

console.log(`====== CUSTOMER NAMES ======`);
console.log(customerNames);

console.log(`\n====== TRANSACTION CATEGORY ======`);
console.log({ transactions: categorizedTransactions });

console.log(`\n====== PLATFORM FEE ======`);
console.log({ transactions: transactionsWithFee });
