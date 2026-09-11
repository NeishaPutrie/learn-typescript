/**
 * An LMS stores student performance data below.
 * The school wants to analyze students using different criteria.
 * A student is considered academically successful if:
 * - Score ≥ 75
 * - Attendance ≥ 90%
 * 
 * 
 * The teacher wants to generate:
 *  - Pass/fail status.
 *  - Academic performance category.
 *  - Attendance status.
 *  - Final recommendation.
 * 
 * Recommendation Rules:
 * ----------------------------------------------------------------|
 * | Condition                      | Recommendation               |
 * | ------------------------------ | ---------------------------- |
 * | Score ≥ 90 AND attendance ≥ 90 | Excellent                    |
 * | Score ≥ 75 AND attendance ≥ 90 | Good                         |
 * | Score ≥ 75 BUT attendance < 90 | Improve Attendance           |
 * | Score < 75                     | Improve Academic Performance |
 * ----------------------------------------------------------------|
 * 
 * Challenge:
 * - processStudents() should know nothing about these rules.
 * - It should only process the students and execute the callback.
 */

type Student = {
    name: string
    score: number
    attendance: number
}


type PASS_FAIL_STATUS = "Pass" | "Fail"
type PERFORMANCE_CATEGORY = "Excellent" | "Good" | "Needs Improvement"
type ATTENDANCE_STATUS = "Good" | "Needs Improvement"
type RECOMMENDATION = "Excellent" | "Good" | "Improve Attendance" | "Improve Academic Performance"

type StudentPassFail = Student & { status: PASS_FAIL_STATUS }
type StudentPerformance = Student & { category: PERFORMANCE_CATEGORY }
type StudentAttendance = Student & { attendanceStatus: ATTENDANCE_STATUS }
type StudentRecommendation = Student & { recommendation: RECOMMENDATION }


function getPerformanceCategory(student: Student): StudentPerformance {
    let category: PERFORMANCE_CATEGORY;
    
    if (student.score >= 90) {
        category = "Excellent";
    } else if (student.score >= 75) {
        category = "Good";
    } else {
        category = "Needs Improvement";
    }
    
    return {
        ...student,
        category
    };
}

function getAttendanceStatus(student: Student): StudentAttendance {
    const attendanceStatus: ATTENDANCE_STATUS = student.attendance >= 90 ? "Good" : "Needs Improvement";
    
    return {
        ...student,
        attendanceStatus
    };
}

function getFinalRecommendation(student: Student): StudentRecommendation {
    let recommendation: RECOMMENDATION;
    
    if (student.score >= 90 && student.attendance >= 90) {
        recommendation = "Excellent";
    } else if (student.score >= 75 && student.attendance >= 90) {
        recommendation = "Good";
    } else if (student.score >= 75 && student.attendance < 90) {
        recommendation = "Improve Attendance";
    } else {
        recommendation = "Improve Academic Performance";
    }
    
    return {
        ...student,
        recommendation
    };
}

function processStudents<T>(
    arr: Student[],
    callback: (student: Student) => T
): T[] {
    return arr.map(student => callback(student));
}

const students = [
    { name: "Alya", score: 92, attendance: 96 },
    { name: "Budi", score: 68, attendance: 88 },
    { name: "Citra", score: 84, attendance: 91 },
    { name: "Dimas", score: 73, attendance: 95 },
    { name: "Eka", score: 95, attendance: 82 },
    { name: "Fajar", score: 79, attendance: 97 }
];