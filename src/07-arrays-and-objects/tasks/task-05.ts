/**
 * You are developing a simple exam analytics system.
 * Tasks: 
 * 1. Calculate student score (each correct answer get 20 points)
 * 2. Get students that pass (> 70)
 * 3. Find student who reach highest score 
 * 4. Calculate class's average score
 */

type Student = {
    id: number
    name: string
    answers: string[]
}

type StudentWithScore = Student & {
    score: number
}

const students: Student[] = [
    {
        id: 1,
        name: "Andi",
        answers: ["A", "B", "C", "A", "B"],
    },
    {
        id: 2,
        name: "Budi",
        answers: ["A", "C", "C", "A", "D"],
    },
    {
        id: 3,
        name: "Citra",
        answers: ["B", "B", "C", "A", "B"],
    },
];

const correctAnswers: string[] = ["A", "B", "C", "A", "B"];

// Task 1: Calculate student score (each correct answer = 20 points)
function calculateStudentScore(student: Student, correctAnswers: string[]): StudentWithScore {
    const correctCount = student.answers.filter((answer, index) => answer === correctAnswers[index]).length;
    const score = correctCount * 20;
    
    return {
        ...student,
        score
    };
}

// Helper: Get all students with their scores
function getAllStudentsWithScores(students: Student[], correctAnswers: string[]): StudentWithScore[] {
    return students.map(student => calculateStudentScore(student, correctAnswers));
}

// Task 2: Get students that pass (score > 70)
function getPassingStudents(studentScores: StudentWithScore[]): StudentWithScore[] {
    return studentScores.filter(student => student.score > 70);
}

// Task 3: Find student who reach highest score
function findHighestScoreStudent(studentScores: StudentWithScore[]): StudentWithScore | undefined {
    return studentScores.reduce((max, student) => student.score > max.score ? student : max);
}

// Task 4: Calculate class's average score
function calculateAverageScore(studentScores: StudentWithScore[]): number {
    const totalScore = studentScores.reduce((sum, student) => sum + student.score, 0);
    return totalScore / studentScores.length;
}

// Execute tasks
const studentScores = getAllStudentsWithScores(students, correctAnswers);

console.log(`====== TASK 1: Student Scores ======`);
console.log(studentScores);


console.log(`\n====== TASK 2: Passing Students (Score > 70) ======`);
const passingStudents = getPassingStudents(studentScores);
console.log(passingStudents);


console.log(`\n====== TASK 3: Highest Score Student ======`);
const highestStudent = findHighestScoreStudent(studentScores);
console.log(highestStudent);


console.log(`\n====== TASK 4: Class Average Score ======`);
const averageScore = calculateAverageScore(studentScores);
console.log(`Average Score: ${averageScore.toFixed(2)}`);
