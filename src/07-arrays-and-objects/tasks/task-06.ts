/**
 * A school library records book borrowing transactions.
 * Tasks:
 * 1. Find all borrowing transactions for "Andi".
 * 2. Find the book information for every borrowing transaction.
 * 3. Find students who borrowed a programming book.
 * 4. Calculate the total number of borrowing transactions.
 * 5. Calculate the average borrowing duration.
 * 6. Find students who borrowed books for more than 7 days.
 */
type Book = {
    id: number
    title: string
    category: string
    stock: number
}

type Borrowing = {
    student: string
    bookId: number
    days: number
}

const books: Book[] = [
    { id: 1, title: "Clean Code", category: "Programming", stock: 3 },
    { id: 2, title: "Atomic Habits", category: "Self Development", stock: 5 },
    { id: 3, title: "The Pragmatic Programmer", category: "Programming", stock: 2 },
    { id: 4, title: "Design Patterns", category: "Programming", stock: 1 },
];

const borrowings: Borrowing[] = [
    { student: "Andi", bookId: 1, days: 7 },
    { student: "Budi", bookId: 2, days: 3 },
    { student: "Citra", bookId: 1, days: 10 },
    { student: "Deni", bookId: 3, days: 5 },
    { student: "Eka", bookId: 1, days: 4 },
    { student: "Andi", bookId: 3, days: 8 },
];


function task1_findAndiTransactions() {
    const andiTransactions = borrowings.filter(borrowing => borrowing.student === "Andi");
    return andiTransactions;
}


function task2_getBorrowingWithBooks() {
    const result = borrowings.map(borrowing => {
        
        const book = books.find(b => b.id === borrowing.bookId);
        
        
        return {
            student: borrowing.student,
            bookId: borrowing.bookId,
            days: borrowing.days,
            bookTitle: book?.title,
            category: book?.category
        };
    });
    
    return result;
}


function task3_getProgrammingBorrowers() {
    const students: string[] = [];
    
    // Loop setiap borrowing
    for (let i = 0; i < borrowings.length; i++) {
        const borrowing = borrowings[i];
        
        // mencari buku dengan id yang sama
        const book = books.find(b => b.id === borrowing.bookId);
        
        
        if (book?.category === "Programming") {
            if (!students.includes(borrowing.student)) {
                students.push(borrowing.student);
            }
        }
    }
    
    return students;
}


function task4_totalTransactions() {
    return borrowings.length;
}


function task5_averageBorrowingDuration() {
    // Hitung total hari
    let totalDays = 0;
    for (let i = 0; i < borrowings.length; i++) {
        totalDays = totalDays + borrowings[i].days;
    }
    
    
    const average = totalDays / borrowings.length;
    return average;
}


function task6_longBorrowers() {
    const students: string[] = [];
    
    // Loop setiap borrowing
    for (let i = 0; i < borrowings.length; i++) {
        const borrowing = borrowings[i];
        
        
        if (borrowing.days > 7) {
            if (!students.includes(borrowing.student)) {
                students.push(borrowing.student);
            }
        }
    }
    
    return students;
}


console.log(`====== TASK 1: Andi's Borrowing Transactions ======`);
console.log(task1_findAndiTransactions());

console.log(`\n====== TASK 2: Borrowing with Book Information ======`);
console.log(task2_getBorrowingWithBooks());

console.log(`\n====== TASK 3: Students Who Borrowed Programming Books ======`);
console.log(task3_getProgrammingBorrowers());


console.log(`\n====== TASK 4: Total Borrowing Transactions ======`);
console.log(`Total: ${task4_totalTransactions()} transactions`);


console.log(`\n====== TASK 5: Average Borrowing Duration ======`);
const avg = task5_averageBorrowingDuration();
console.log(`Average: ${avg.toFixed(2)} days`);


console.log(`\n====== TASK 6: Students with Borrowing > 7 Days ======`);
console.log(task6_longBorrowers());
