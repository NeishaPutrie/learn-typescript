/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */

type product = {
    productCode: string;
    productName: string;
    sellPrice: number;
    StockQ: number;
    Weight: number;
    avgCustRate: number;
    discountProduct: boolean;
};

const productdata: product = {
    productCode: "NKT156",
    productName: "Soap",
    sellPrice: 8000,
    StockQ: 50,
    Weight: 150,
    avgCustRate: 4.5,
    discountProduct: true
};

const productdata2: product = {
    productCode: "NKT157",
    productName: "laptop",
    sellPrice: 12500000,
    StockQ: 45,
    Weight: 4.5,
    avgCustRate: 5,
    discountProduct: true
};

const productdata3: product = {
    productCode: "NKT158",
    productName: "TV",
    sellPrice: 12500000,
    StockQ: 45,
    Weight: 4.5,
    avgCustRate: 5,
    discountProduct: true
};

console.log("Product 1 : ", productdata);
console.log("Product 2 : ", productdata2);
console.log("Product 3 : ", productdata3);
