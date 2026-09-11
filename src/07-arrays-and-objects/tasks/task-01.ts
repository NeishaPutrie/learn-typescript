/**
 * A teacher has a list of students and their exam scores below.
 * The teacher wants to analyze the exam results.
 * Tasks:
 * 1. Get an array containing only the student names.
 * expected array: ["Andi", "Budi", "Citra", "Deni", "Eka"]
 * 2. Get students who passed. Passing score is >= 70. 
 * expected array: [
 * { name: "Andi", score: 85 },
 * { name: "Citra", score: 91 },
 * { name: "Deni", score: 74 }
 * ]
 * 
 * 3. Find the student named "Citra".
 * 4. Calculate the average score.
 */

type Student = {
  name: string
  score: number
}

const students: Student[] = [
  { name: "Andi", score: 85 },
  { name: "Budi", score: 62 },
  { name: "Citra", score: 91 },
  { name: "Deni", score: 74 },
  { name: "Eka", score: 55 },
];


function getStudentNames(students: Student[]): string[] {
  return students.map(student => student.name);
}


function getPassedStudents(students: Student[]): Student[] {
  return students.filter(student => student.score >= 70);
}


function findStudentByName(students: Student[], name: string): Student | undefined {
  return students.find(student => student.name === name);
}


function calculateAverageScore(students: Student[]): number {
  const total = students.reduce((sum, student) => sum + student.score, 0);
  return total / students.length;
}

// Execute tasks
console.log(`====== TASK 1: Student Names ======`);
const studentNames = getStudentNames(students);
console.log(studentNames);

console.log(`\n====== TASK 2: Passed Students (Score >= 70) ======`);
const passedStudents = getPassedStudents(students);
console.log(passedStudents);


console.log(`\n====== TASK 3: Find Student "Citra" ======`);
const cittraStudent = findStudentByName(students, "Citra");
console.log(cittraStudent);


console.log(`\n====== TASK 4: Average Score ======`);
const averageScore = calculateAverageScore(students);
console.log(`Average Score: ${averageScore.toFixed(2)}`);
