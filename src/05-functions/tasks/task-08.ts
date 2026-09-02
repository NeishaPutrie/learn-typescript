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

function getTotalStudents(data: Submission[]): number {
    return data.length;
}

function getSubmitted(data: Submission[]): Submission[] {
    return data.filter(s => s.submitted);
}

function getMissing(data: Submission[]): Submission[] {
    return data.filter(s => !s.submitted);
}

function getPassed(data: Submission[]): Submission[] {
    return data.filter(s => s.submitted && s.score >= PASSING_SCORE);
}