/**
 * An e-commerce company wants to manage product inventory.
 * Each product has:
 * - Product ID
 * - Product name
 * - Price
 * - Stock quantity
 * For example:
 * Product
 * - ID     : PRD001
 * - Name   : Gaming Laptop
 * - Price  : Rp15,000,000
 * - Stock  : 20
 * The company wants to make sure product data cannot be changed carelessly.
 * 
 * The system needs to support:
 * - Increasing stock
 * - Decreasing stock
 * - Changing price
 * - Checking stock availability
 * - Calculating inventory value
 * 
 * Student Tasks
 * - Create class Product
 * - Private Properties, at minimum:
 *   * private price: number;
 *   * private stock: number;
 * 
 * - Other properties can be public or private depending on the student's design.
 * - Required Methods
 *   * addStock(quantity)
 *   * removeStock(quantity)
 *   * changePrice(newPrice)
 *   * isAvailable()
 *   * getInventoryValue()
 *   * showProductInfo()
 * 
 * - Business Rules
 * addStock(): quantity must be greater than 0.
 * removeStock(): quantity must be greater than 0 and not greater than current stock
 * changePrice(): new price must be greater than 0.
 * isAvailable(): returns true when stock > 0, otherwise false
 * getInventoryValue(): calculate price × stock
 */
class Product {
    private id: string;
    private name: string;

    private price: number;
    private stock: number;

    constructor(
        id: string,
        name: string,
        price: number,
        stock: number
    ) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    
    addStock(quantity: number): void {
        if (quantity <= 0) {
            console.log(`Gagal menambag stock. Kuantitas harus lebih dari 0!`);
            return;
        }
        this.stock += quantity;
        console.log(`Stok ditambah ${quantity}. Stok sekarang: ${this.stock}. `);
    }

    removeStock(quantity: number): void {
        if (quantity <= 0) {
            console.log(`Gagal mengurangi stok. Kuantitas harus lebih dari 0!.`);
            return;
        }
        if (quantity > this.stock) {
            (`Gagal mengurangi stock! Stock TIDAK CUKUP.`);
            (`Stock saat ini    : ${this.stock}`);
            return;
        }
        this.stock -= quantity;
        console.log(`Stock dikurangi ${quantity}. Stock sekarang    : ${this.stock}`);
    }

    changePrice(newPrice: number): void {
        if (newPrice <= 0) {
            console.log(`Gagal mengubah harga. Harga harus lebih dari 0!`);
            return;
        }

        const oldPrice = this.price;
        this.price = newPrice;
        console.log(`Harga berhasil diubah dari ${this.formatCurrency(oldPrice)} menjadi Rp${this.formatCurrency(newPrice)}`);
    }

    isAvailable(): boolean {
        return this.stock > 0;
    }

    getInventoryValue(): number {
        return this.price * this.stock;
    }

    showProductInfo(): void {
        console.log(`=== INFORMASI PRODUK ===`);
        console.log("╚════════════════════════════════════════╝");
    console.log(`ID Produk       : ${this.id}`);
    console.log(`Nama Produk     : ${this.name}`);
    console.log(`Harga           : Rp${this.formatCurrency(this.price)}`);
    console.log(`Stock           : ${this.stock} unit`);
    console.log(`Ketersediaan    : ${this.isAvailable() ? "Tersedia" : "Habis"}`);
    console.log(`Nilai Inventory : Rp${this.formatCurrency(this.getInventoryValue())}`);
    }

    private formatCurrency(value: number): string {
        return value.toLocaleString("id-ID");
    }

    getPrice(): number {
        return this.price;
    }

    getStock(): number {
        return this.stock;
    }

    getName(): string {
        return this.name;
    }

    getID(): string {
        return this.id;
    }
}


const laptop = new Product(
    "PRD001",
    "Gaming Laptop",
    15000000,
    20
);

laptop.showProductInfo();

laptop.addStock(5);
console.log();

laptop.removeStock(3);
console.log();

laptop.changePrice(14500000);
console.log();

console.log(`Produk tersedia? ${laptop.isAvailable()}`);
console.log();

console.log(`Nilai Iventory : Rp${(laptop.getInventoryValue()). toLocaleString("id-ID")}`);
console.log();

laptop.showProductInfo();
