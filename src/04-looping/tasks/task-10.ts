/**
 * An LMS stores assignment submission information on array below.
 * Business Rules
 * - Students who do not submit automatically receive a score of 0.
 * - A passing score is 75.
 * - Submitted assignments with a score below 75 require revision.
 * 
 * Student Tasks using a loop for:
 * - Count students who submitted their assignment.
 * - Count students who did not submit.
 * - Count students who passed.
 * - Count students who must revise their assignment.
 * - Display the names of students who did not submit.
 * - Display the names of students who must revise.
 * - Calculate the class average score.
 */

const submissions = [
    { student: "Alya", submitted: true, score: 92 },
    { student: "Budi", submitted: false, score: 0 },
    { student: "Citra", submitted: true, score: 78 },
    { student: "Dimas", submitted: true, score: 65 },
    { student: "Eka", submitted: false, score: 0   },
    { student: "Fajar", submitted: true, score: 84 },
    { student: "Gita", submitted: true, score: 90 },
    { student: "Hana", submitted: true, score: 73 }
];

const passing_score = 75;

let submittedCount = 0;
let notSubmittedCount = 0;
let passedCount = 0;
let revisionCount = 0;
let totalScore = 0;

const notSubmittedNames: String[] = [];
const revisionNames: String[] = [];

    for (let i = 0; i < submissions.length; i++) {
        const { student, submitted, score } = submissions[i];

        if (submitted) {
            submittedCount++;

            if (score >= passing_score) {
                passedCount++;
            } else {
                revisionCount++;
                revisionNames.push(student);
            }
        } else {
            notSubmittedCount++;
            notSubmittedNames.push(student);
        }

        totalScore += score;
    }

    const averageScore = totalScore / submissions.length;


console.log("-------------------------------------");
console.log(`Students submitted     : ${submittedCount}`);
console.log(`Students not submitted : ${notSubmittedCount}`);
console.log(`Students passed        : ${passedCount}`);
console.log(`Students need revision : ${revisionCount}`);
console.log("-------------------------------------");
console.log(`Did not submit  : ${notSubmittedNames.join(", ") || "None"}`);
console.log(`Need revision   : ${revisionNames.join(", ") || "None"}`);
console.log("-------------------------------------");
console.log(`Class average score    : ${averageScore.toFixed(2)}`);
console.log("-------------------------------------");

