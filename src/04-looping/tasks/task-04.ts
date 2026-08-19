/**
 * An online store wants to analyze today's sales transactions. 
 * Each transaction amount is stored in an array.
 * ---------------------------------
 * const sales = [
 * 125000,
 * 350000,
 * 78000,
 * 910000,
 * 150000,
 * 420000,
 * 275000,
 * 99000,
 * 640000,
 * 18000
 * ]
 * -------------------------------------
 * 
 * Student task in calculate:
 * 1. Total sales revenue
 * 2. Highest transaction
 * 3. Lowest transaction
 * 4. Number of transactions worth Rp300,000 or more
 * 5. Average transaction value
 */

const sales = [
     125000, 350000, 78000, 910000, 150000,
  420000, 275000, 99000, 640000, 18000,
];

let totalRevenue = 0;
let HighestTransaction = sales[0];
let lowestTransaction = sales[0];
let countAbove300k = 0;


// Iterate through every transaction
for (let i = 0; i < sales.length; i++) {
  const amount = sales[i];

  // 1. Total sales revenue
  totalRevenue += amount;

  // 2. Highest transaction
  if (amount > HighestTransaction) {
    HighestTransaction = amount;
  }

    if (amount < lowestTransaction) {
        lowestTransaction = amount;
    }

    if (amount >= 300000) {
        countAbove300k++;
    }
}

const averageTransaction = totalRevenue / sales.length;