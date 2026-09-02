/**
 * An LMS stores assignment submission data at following array.
 * Business Rules
 * - Passing score = 75
 * - Students who do not submit receive 0
 * - Submitted assignments below 75 require revision.
 * 
 * The principal requests a report showing:
 * - Total students
 * - Submitted assignments
 * - Missing assignments
 * - Passed students
 * - Students requiring revision
 * - Average score
 * - Highest score
 * - Lowest score
 * 
 * Student Tasks
 * 1. Design your own functions.
 * At minimum, your solution must contain:
 * - 7 non-void functions
 * - 1 void function to display the report.
 * 
 */

interface Submission {
    student: string;
    submitted: boolean;
    score: number;
}

const submissions: Submission[] = [
    {
        student: "Alya",
        submitted: true,
        score: 90
    },
    {
        student: "Budi",
        submitted: false,
        score: 0
    },
    {
        student: "Citra",
        submitted: true,
        score: 84
    },
    {
        student: "Dimas",
        submitted: true,
        score: 72
    },
    {
        student: "Eka",
        submitted: false,
        score: 0
    },
    {
        student: "Fajar",
        submitted: true,
        score: 96
    }
];

const PASSING_SCORE = 75;


// 1
function getTotalStudents(data: Submission[]): number {
    return data.length;
}
 
// 2
function getSubmitted(data: Submission[]): Submission[] {
    return data.filter(s => s.submitted);
}
 
// 3
function getMissing(data: Submission[]): Submission[] {
    return data.filter(s => !s.submitted);
}
 
// 4
function getPassed(data: Submission[]): Submission[] {
    return data.filter(s => s.submitted && s.score >= PASSING_SCORE);
}
 
// 5
function getRevision(data: Submission[]): Submission[] {
    return data.filter(s => s.submitted && s.score < PASSING_SCORE);
}
 
// 6
function getAverageScore(data: Submission[]): number {
    const submitted = getSubmitted(data);
    const total = submitted.reduce((sum, s) => sum + s.score, 0);
    return submitted.length ? total / submitted.length : 0;
}
 
// 7
function getHighestScore(data: Submission[]): number {
    const submitted = getSubmitted(data);
    return submitted.length ? Math.max(...submitted.map(s => s.score)) : 0;
}
 
// 8
function getLowestScore(data: Submission[]): number {
    const submitted = getSubmitted(data);
    return submitted.length ? Math.min(...submitted.map(s => s.score)) : 0;
}
 
// void
function printReport(data: Submission[]): void {
    console.log(`Total Students      : ${getTotalStudents(data)}`);
    console.log(`Submitted           : ${getSubmitted(data).length}`);
    console.log(`Missing             : ${getMissing(data).length}`);
    console.log(`Passed              : ${getPassed(data).length}`);
    console.log(`Needs Revision      : ${getRevision(data).length}`);
    console.log(`Average Score       : ${getAverageScore(data).toFixed(2)}`);
    console.log(`Highest Score       : ${getHighestScore(data)}`);
    console.log(`Lowest Score        : ${getLowestScore(data)}`);
}


printReport(submissions);