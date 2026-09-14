/**
 * A school library wants to create a digital system for managing books.
 * 
 * Each book has:
 * - ISBN
 * - Title
 * - Author
 * - Total pages
 * - Borrowing status
 * 
 * The library wants to prevent users from directly changing the borrowing status.
 * Instead, the status can only change through:
 * - borrow()
 * - returnBook()
 * 
 * Business Rules
 * - A book can only be borrowed when: status = available
 * - When a book is borrowed: available → borrowed
 * - A borrowed book cannot be borrowed again.
 * - When the book is returned: borrowed → available
 * - An available book cannot be returned.
 * 
 * Tasks:
 * - create class Book that minimum has property and method below:
 *   - private status: string;
 *   - borrow()
 *   - returnBook()
 *   - showInfo()
 *   - isAvailable()
 * - implement class with at least 2 objects
 */

class Book {
  private isbn: string;
  private title: string;
  private author: string;
  private totalPages: number;

  private status: string;

  constructor(
    isbn: string,
    title: string,
    author: string,
    totalPages: number
  ) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.totalPages = totalPages;
    this.status = "available";
  }

  borrow(): void {
    if (this.status === "available") {
        this.status = "arrowed";
        console.log(`"${this.title}" berhasil dipinjam. Status: ${this.status}`);
    }
  }

  returnBook(): void {
    if (this.status === "borrowed") {
      this.status = "available";
      console.log(`✓ "${this.title}" berhasil dikembalikan`);
    } else {
      console.log(`✗ "${this.title}" tidak bisa dikembalikan. Status: ${this.status}`);
  }
}   
    showInfo(): void {
    console.log("================================");
    console.log(`ISBN      : ${this.isbn}`);
    console.log(`Judul     : ${this.title}`);
    console.log(`Pengarang : ${this.author}`);
    console.log(`Halaman   : ${this.totalPages}`);
    console.log(`Status    : ${this.status === "available" ? "📗 Available" : "📕 Borrowed"}`);
    console.log("================================");
  }
  isAvailable(): boolean {
    return this.status === "available";
  }
  
  // Bonus: Getter untuk status
  getStatus(): string {
    return this.status;
  }
}

const book1 = new Book(
  "ISBN-001",
  "Harry Potter and the Philosopher's Stone",
  "J.K. Rowling",
  309
);

// Object 2: Book - "The Hobbit"
const book2 = new Book(
  "ISBN-002",
  "The Hobbit",
  "J.R.R. Tolkien",
  310
);

// =============== TESTING BOOK 1 ===============
console.log("\n--- TESTING BOOK 1: Harry Potter ---\n");

book1.showInfo();

console.log("Cek apakah tersedia?", book1.isAvailable());  // true

console.log("\nMembaca buku...");
book1.borrow();  // ✓ Berhasil dipinjam

book1.showInfo();

console.log("Coba pinjam lagi:");
book1.borrow();  // ✗ Tidak bisa, sudah diborrow

console.log("\nKembalikan buku:");
book1.returnBook();  // ✓ Berhasil dikembalikan

book1.showInfo();

console.log("Coba kembalikan lagi:");
book1.returnBook();  // ✗ Tidak bisa, sudah available

// =============== TESTING BOOK 2 ===============
console.log("\n--- TESTING BOOK 2: The Hobbit ---\n");

book2.showInfo();

console.log("\nMeminjam buku:");
book2.borrow();  // ✓ Berhasil dipinjam

book2.showInfo();

console.log("Cek apakah tersedia?", book2.isAvailable());  // false

console.log("\nKembalikan buku:");
book2.returnBook();  // ✓ Berhasil dikembalikan

console.log("Pinjam lagi:");
book2.borrow();  // ✓ Berhasil dipinjam

book2.showInfo();