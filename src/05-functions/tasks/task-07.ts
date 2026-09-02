/**
 * A university stores enrollment information at following array
 * The university needs a report containing:
 * - Total students
 * - Active students
 * - Inactive students
 * - Software Engineering students
 * - Networking students
 * - Multimedia students
 * 
 * Complete following functions!
 */

const students = [
  {
    name: "Alya",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Budi",
    major: "Networking",
    active: false
  },
  {
    name: "Citra",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Dimas",
    major: "Multimedia",
    active: true
  },
  {
    name: "Eka",
    major: "Networking",
    active: false
  }
];

interface Student {
  name: string;
  major: string;
  active: boolean
}

const students: Student[] = [
  { name: "Alya", major: "Software Engineering", active: true },
  { name: "Budi", major: "Networking", active: false },
  { name: "Citra", major: "Software Engineering", active: true },
  { name: "Dimas", major: "Multimedia", active: true },
  { name: "Eka", major: "Networking", active: false }
];

function countActiveStudents(students: Student[]): number {
    return students.filter(s => s.active).length;
}

function countInactiveStudents(students: Student[]): number {
  return students.filter(s => !s.active).length;
}

function countStudentsByMajor(students: Student[], major: string): number {
  return students.filter(s => s.major === major).length;
}

function printEnrollmentReport(students: Student[], major: string): number {
  return students.filter(s => s.major === major).length;  
  console.log("=== University Enrollment Report ===");
  console.log(`Total students        : ${students.length}`);
  console.log(`Active students       : ${countActiveStudents(students)}`);
  console.log(`Inactive students     : ${countInactiveStudents(students)}`);
  console.log(`Software Engineering  : ${countStudentsByMajor(students, "Software Engineering")}`);
  console.log(`Networking            : ${countStudentsByMajor(students, "Networking")}`);
  console.log(`Multimedia            : ${countStudentsByMajor(students, "Multimedia")}`);
}



