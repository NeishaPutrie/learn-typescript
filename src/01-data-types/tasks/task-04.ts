/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */

// 1. Define Book Type
type Book = {
  isbn: string;
  title: string;
  author: string;
  totalPages: number;
  category: string;
  isAvailable: boolean;
};

// 2. Implement type on 3 books data
const books: Book[] = [
  {
    isbn: "978-602-03-3295-7",
    title: "Laskar Pelangi",
    author: "Andrea Hirata",
    totalPages: 529,
    category: "Fiction",
    isAvailable: true,
  },
  {
    isbn: "978-979-3062-79-2",
    title: "Bumi Manusia",
    author: "Pramoedya Ananta Toer",
    totalPages: 535,
    category: "Historical Fiction",
    isAvailable: false,
  },
  {
    isbn: "978-602-06-3317-7",
    title: "Atomic Habits",
    author: "James Clear",
    totalPages: 352,
    category: "Self-Development",
    isAvailable: true,
  },
];

// Display the book data
console.log("=== SCHOOL LIBRARY CATALOG ===");
console.log(books);