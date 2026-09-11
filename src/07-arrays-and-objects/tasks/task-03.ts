/**
 * A school has attendance data below.
 * Tasks:
 * 1. Get all student's names who are present
 * expected array: ["Andi","Citra"]
 * 2. Get all students who are present
 * expected array: ["Budi"]
 * 3. Get students who are late
 * expected array: ["Deni"]
 * 4. Generate array that contains {name, status}
 */
type Student = {
    id: number
    name: string
}

type Attendance = {
    studentId: number
    status: "present" | "absent" | "late"
}

type StudentAttendance = {
    name: string
    status: string
}

const students: Student[] = [
    { id: 1, name: "Andi" },
    { id: 2, name: "Budi" },
    { id: 3, name: "Citra" },
    { id: 4, name: "Deni" },
];

const attendance: Attendance[] = [
    { studentId: 1, status: "present" },
    { studentId: 2, status: "absent" },
    { studentId: 3, status: "present" },
    { studentId: 4, status: "late" },
];

// Helper function to get student name by ID
function getStudentNameById(students: Student[], studentId: number): string | undefined {
    return students.find(student => student.id === studentId)?.name;
}

// Task 1: Get all student names who are present
function getPresentStudentNames(students: Student[], attendance: Attendance[]): string[] {
    return attendance
        .filter(record => record.status === "present")
        .map(record => getStudentNameById(students, record.studentId))
        .filter((name): name is string => name !== undefined);
}

// Task 2: Get all students who are absent (based on expected output showing Budi)
function getAbsentStudentNames(students: Student[], attendance: Attendance[]): string[] {
    return attendance
        .filter(record => record.status === "absent")
        .map(record => getStudentNameById(students, record.studentId))
        .filter((name): name is string => name !== undefined);
}

// Task 3: Get students who are late
function getLateStudentNames(students: Student[], attendance: Attendance[]): string[] {
    return attendance
        .filter(record => record.status === "late")
        .map(record => getStudentNameById(students, record.studentId))
        .filter((name): name is string => name !== undefined);
}

// Task 4: Generate array that contains {name, status}
function getStudentAttendanceReport(students: Student[], attendance: Attendance[]): StudentAttendance[] {
    return attendance
        .map(record => ({
            name: getStudentNameById(students, record.studentId) || "Unknown",
            status: record.status
        }));
}

// Execute tasks
console.log(`====== TASK 1: Present Student Names ======`);
const presentNames = getPresentStudentNames(students, attendance);
console.log(presentNames);


console.log(`\n====== TASK 2: Absent Student Names ======`);
const absentNames = getAbsentStudentNames(students, attendance);
console.log(absentNames);


console.log(`\n====== TASK 3: Late Student Names ======`);
const lateNames = getLateStudentNames(students, attendance);
console.log(lateNames);


console.log(`\n====== TASK 4: Student Attendance Report ======`);
const attendanceReport = getStudentAttendanceReport(students, attendance);
console.log(attendanceReport);
