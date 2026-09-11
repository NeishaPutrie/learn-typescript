/**
 * A customer has a shopping cart below.
 * Tasks:
 * 1. Count subtotal of all products (expected result: 3.350.000)
 * 2. Calculate discount with this rules.
 *  - subtotal >= 3,000,000 → 10% discount
 *  - subtotal >= 2,000,000 → 5% discount
 *  - otherwise             → 0%
 * 
 * 3. Calculate final subtotal after given discount
 * 4. Find expensive product ( > 1.000.000)
 */

type CartItem = {
    product: string
    price: number
    quantity: number
}

const cart: CartItem[] = [
    {
        product: "Keyboard",
        price: 350000,
        quantity: 2,
    },
    {
        product: "Mouse",
        price: 150000,
        quantity: 1,
    },
    {
        product: "Monitor",
        price: 2500000,
        quantity: 1,
    },
];

// ount subtotal of all products
function calculateSubtotal(cart: CartItem[]): number {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Task 2: Calculate discount
function calculateDiscount(subtotal: number): number {
    if (subtotal >= 3000000) {
        return subtotal * 0.10;
    } else if (subtotal >= 2000000) {
        return subtotal * 0.05;
    } else {
        return 0;
    }
}

// Task 3: Calculate final subtotal after discount
function calculateFinalTotal(subtotal: number, discount: number): number {
    return subtotal - discount;
}

// Task 4: Find expensive product (> 1.000.000)
function findExpensiveProducts(cart: CartItem[]): CartItem[] {
    return cart.filter(item => item.price > 1000000);
}

// Execute tasks
const subtotal = calculateSubtotal(cart);
const discount = calculateDiscount(subtotal);
const finalTotal = calculateFinalTotal(subtotal, discount);
const expensiveProducts = findExpensiveProducts(cart);

console.log(`====== TASK 1: Subtotal ======`);
console.log(`Subtotal: Rp${subtotal.toLocaleString('id-ID')}`);


console.log(`\n====== TASK 2: Discount ======`);
console.log(`Discount: Rp${discount.toLocaleString('id-ID')} (10%)`);


console.log(`\n====== TASK 3: Final Total ======`);
console.log(`Final Total: Rp${finalTotal.toLocaleString('id-ID')}`);


console.log(`\n====== TASK 4: Expensive Products (> Rp1.000.000) ======`);
console.log(expensiveProducts);
