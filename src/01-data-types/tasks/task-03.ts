/**
 * SMK Telkom Malang is developing a new Student Information System. 
 * Before students can use the system, the administrator must record each student's basic information. 
 * Every student has a unique student ID, a full name, an age, and a status indicating whether they are currently an active student.
 * 
 * Task:
 * 1. Define a proper type for the student information.
 * 2. Implement a type that you defined on 3 students data.
 * 
 * display the student data using console.log.
 */

type Student = {
    id: string;
    fullName: string;
    age: number;
    isActive: boolean;
};

// 2. Implement type on 3 students data
const students: Student[] = [
  {
    id: "ST2026001",
    fullName: "Ahmad Rizky",
    age: 16,
    isActive: true,
  },
  {
    id: "ST2026002",
    fullName: "Siti Nurhaliza",
    age: 17,
    isActive: true,
  },
  {
    id: "ST2026003",
    fullName: "Budi Santoso",
    age: 16,
    isActive: false,
  },
];

// Display the student data
console.log("=== STUDENT INFORMATION SYSTEM ===");
console.log(students);