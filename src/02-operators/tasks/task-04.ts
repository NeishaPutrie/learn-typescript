/**
 * An online store is processing a customer's shopping cart.
 * The customer purchased:
 * 
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 * 
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.
 * - Only Premium members receive free shipping.
 * - Every purchased product increases the total item counter.
 * 
 * Additional Information: Current customer is Premium member.
 * 
 * Task:
 *  - Calculate subtotal.
 *  - Count the total purchased items using an increment operator.
 *  - Determine whether a discount should be applied.
 *  - Calculate the final payment.

 */

const keyboardPrice: number = 850000;
const keyboardQty: number = 1;

const mousePrice: number = 275000;
const mouseQty: number = 2;

const mousePadPrice: number = 120000;
const mousePadQty: number = 1;

const isPremiumMember: boolean = true;
const discountThreshold: number = 1000000;
const discountRate: number = 0.1; // 10%

// === 1. Hitung subtotal per produk & totalnya ===
const keyboardSubtotal: number = keyboardPrice * keyboardQty;
const mouseSubtotal: number = mousePrice * mouseQty;
const mousePadSubtotal: number = mousePadPrice * mousePadQty;

const subtotal: number = keyboardSubtotal + mouseSubtotal + mousePadSubtotal;

// === 2. Hitung total item dengan increment operator (++) ===
let itemCounter: number = 0;

itemCounter += keyboardQty; // atau bisa pakai perulangan ++ manual
itemCounter += mouseQty;
itemCounter += mousePadQty;

// === 3. Cek apakah dapat diskon ===
const isEligibleForDiscount: boolean = subtotal > discountThreshold;
const discountAmount: number = isEligibleForDiscount ? subtotal * discountRate : 0;

// === Cek gratis ongkir ===
const freeShipping: boolean = isPremiumMember;

// === 4. Hitung final payment ===
const finalPayment: number = subtotal - discountAmount;

// === Display hasil ===
console.log("=== Ringkasan Belanja ===");
console.log(`Subtotal        : Rp${subtotal.toLocaleString("id-ID")}`);
console.log(`Total Item      : ${itemCounter} barang`);
console.log(`Dapat Diskon?   : ${isEligibleForDiscount ? "Ya, 10%" : "Tidak"}`);
console.log(`Jumlah Diskon   : Rp${discountAmount.toLocaleString("id-ID")}`);
console.log(`Gratis Ongkir?  : ${freeShipping ? "Ya" : "Tidak"}`);
console.log("-------------------------");
console.log(`Total Bayar     : Rp${finalPayment.toLocaleString("id-ID")}`);