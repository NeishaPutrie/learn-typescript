/**
 * An online store has customer orders.
 * Tasks:
 * 1. Get only completed orders.
 * 2. Calculate the total value of each order.
 * 3. Find the customer who spent the most.
 * 4. Calculate the total revenue from completed orders.
 * 5. Find all products that have been purchased.
 */
type OrderItem = {
    product: string
    price: number
    quantity: number
}

type Order = {
    id: number
    customer: string
    status: "completed" | "cancelled" | "pending"
    items: OrderItem[]
}

type OrderWithTotal = Order & {
    total: number
}

type CustomerSpending = {
    customer: string
    total: number
}

const orders: Order[] = [
    {
        id: 101,
        customer: "Andi",
        status: "completed",
        items: [
            { product: "Keyboard", price: 350000, quantity: 1 },
            { product: "Mouse", price: 150000, quantity: 2 },
        ],
    },
    {
        id: 102,
        customer: "Budi",
        status: "cancelled",
        items: [
            { product: "Monitor", price: 2500000, quantity: 1 },
        ],
    },
    {
        id: 103,
        customer: "Citra",
        status: "completed",
        items: [
            { product: "Monitor", price: 2500000, quantity: 2 },
            { product: "Keyboard", price: 350000, quantity: 1 },
        ],
    },
];

function getCompletedOrders() {
    const completed = orders.filter(order => order.status === "completed");
    return completed;
}

function calculateOrderTotals() {
    const ordersWithTotal: OrderWithTotal[] = orders.map(order => {
        let total = 0;

        for (let i = 0; i < order.items.length; i++) {
            const item = order.items[i];
            total = total + (item.price * item.quantity);
        }

        return {
            ...order,
            total: total
        };
    });

    return ordersWithTotal;
}