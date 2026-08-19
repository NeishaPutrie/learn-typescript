/**
 * An Internet Service Provider recommends an internet package based on the customer's monthly data usage.
 * Business Rules
 * | Monthly Usage    | Recommended Package |
 * | ---------------- | ------------------- |
 * | Less than 50 GB  | Basic               |
 * | 50–150 GB        | Standard            |
 * | More than 150 GB | Premium             |
 * 
 * Today's customer has used:
 * | Information   | Value        |
 * | ------------- | ------------ |
 * | Customer Name | Raka Saputra |
 * | Monthly Usage | 124 GB       |
 * 
 * Tasks:
 * 1. Declare all variables.
 * 2. Implement the business rules using if...else if...else.
 * 3. Display the recommended package.
 */
// === dataa ===
const customerName: string = "Raka Saputra";
const monthlyUsage: number = 124;
const BudgetCust: number = 1240000;

//=== batas kategori paket ===
const basicLimit: number = 50; 
const standardLimit: number = 150;

//=== harga paketnya ===
const BasicPrice: number = 600000;
const StandardPrice: number = 1000000;
const premiumPrice: number = 350000;

//=== menentukan pakai if.. else.. ===
let recommendedPackage: string;
let packagePrice: number;

if (monthlyUsage < basicLimit) {
    recommendedPackage = "Basic";
    packagePrice = BasicPrice;
} else if (monthlyUsage <= standardLimit) {
    recommendedPackage = "Standard";
    packagePrice = StandardPrice;
} else {
    recommendedPackage = "Premium";
    packagePrice = premiumPrice;
}

const Affordable: boolean = BudgetCust >= packagePrice;

const remainingBudget: number = Affordable ? BudgetCust - packagePrice : BudgetCust;

//=== tampilkan hasil ===
console.log("=== Rekomendasi Paket Internet ===");
console.log(`Nama Pelanggan   : ${customerName}`);
console.log(`Pemakaian Bulanan: ${monthlyUsage} GB`);
console.log(`Paket Rekomendasi: ${recommendedPackage}`);
console.log(`Harga Paket      : Rp${packagePrice}`);
console.log(`Budget Pelanggan : Rp${BudgetCust}`);
console.log(`Status Budget    : ${Affordable ? "BUDGET CUKUP" : "TIDAK CUKUP"}`);
console.log(`Sisa Budget      : Rp${remainingBudget}`);