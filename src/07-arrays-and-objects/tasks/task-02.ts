/**
 * An online store has the following products below.
 * Tasks:
 * 1. Display only products that are currently available.
 * 2. Display only products that are currently available.
 * 3. Generate an array containing only the product names.
 * 4. Calculate the total value of all products currently in stock.
 * 5. Sort available products from most expensive → cheapest.
 */

type Product = {
    id: number
    name: string
    category: string
    price: number
    stock: number
}

const products: Product[] = [
    {
        id: 1,
        name: "Keyboard",
        category: "Computer",
        price: 350000,
        stock: 10,
    },
    {
        id: 2,
        name: "Mouse",
        category: "Computer",
        price: 150000,
        stock: 0,
    },
    {
        id: 3,
        name: "Monitor",
        category: "Computer",
        price: 2500000,
        stock: 5,
    },
    {
        id: 4,
        name: "Headset",
        category: "Audio",
        price: 450000,
        stock: 8,
    },
    {
        id: 5,
        name: "Microphone",
        category: "Audio",
        price: 850000,
        stock: 3,
    }
]

const availableProducts: Product[] = []

for (let i = 0; i < products.length; i++){
    if (products[i].stock > 0) {
        availableProducts.push(products[i])
    }
}

console.log(availableProducts)
console.log("")

const productNames: string[] = []

for (let i = 0; i < products.length; i++){
    productNames.push(products[i].name)
}

console.log(productNames)
console.log("")

let totalValue: number = 0

for (let i =0; i < products.length; i++) {
    if (products[i].stock > 0) {
        const productTotal = products[i].price * products[i].stock
        totalValue = totalValue + productTotal
    }
}

console.log("Total nilai semua produk di stok: Rp" + totalValue.toLocaleString("id-ID"))
console.log("")

// Buat copy dari availableProducts agar tidak mengubah array asli
const sortedProducts: Product[] = []
for (let i = 0; i < availableProducts.length; i++) {
    sortedProducts.push(availableProducts[i])
}

for (let i = 0; i < sortedProducts.length; i++) {
    for (let j = 0; j < sortedProducts.length - 1; j++) {
        if (sortedProducts[j].price < sortedProducts[j + 1].price) {
            const temp = sortedProducts[j]
            sortedProducts[j] = sortedProducts[j + 1]
            sortedProducts[j + 1] = temp
        }
    }
}

console.log(sortedProducts)
console.log("")
 
for (let i = 0; i < sortedProducts.length; i++) {
    console.log(
        `${i + 1}. ${sortedProducts[i].name} - Rp${sortedProducts[i].price.toLocaleString("id-ID")} (Stok: ${sortedProducts[i].stock})`
    )
}