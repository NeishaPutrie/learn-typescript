/**
 * A university is selecting students for a full scholarship.
 * The first screening requires:
 *  - GPA ≥ 3.75
 *  - Family income < Rp5,000,000
 * 
 * If the student passes the first screening, the university performs a second screening.
 * The second screening requires:
 *  - Competition participation ≥ 3
 *  - No disciplinary violations
 *  - Administrative documents are complete
 * 
 * Only students who pass both screening stages receive the scholarship.
 * Student information:
 * | Information             | Value         |
 * | ----------------------- | ------------- |
 * | Student Name            | Fajar Hidayat |
 * | GPA                     | 3.86          |
 * | Family Income           | 4200000       |
 * | Competition Count       | 4             |
 * | Has Disciplinary Record | No            |
 * | Documents Complete      | Yes           |
 * 
 * Display one of the following messages:
 *  - Scholarship Approved
 *  - Passed First Screening, but Failed Second Screening
 *  - Passed First Screening, but Failed Second Screening
 * 
 * Student Tasks
 *  - Declare all variables.
 *  - Implement the first screening.
 *  - Implement the second screening only if the first screening is passed.
 *  - Display the correct result.
 */

const studentName: string = "Fajar Hidayat";
const GPAfajar: number = 3.86;
const FamilyIncomeFajar: number = 4200000;
const comptCountFajar: number = 4;
const hasDisciplanaryRecord: boolean = false;
const documentsComplete: boolean = true;

let resultMessage: string;

//* screening

const passedFirstScreening: boolean = GPAfajar >= 3.75 && FamilyIncomeFajar < 5000000;

//* 2nd screening
if (passedFirstScreening) {
    const passedSecondScreening: boolean =
    comptCountFajar >= 3 && !hasDisciplanaryRecord && documentsComplete;

if (passedSecondScreening) {
    resultMessage = "Scholarship Approved";
}   else {
    resultMessage = "Passed First Screening, but failed second screening";
}
} else {
    resultMessage = "Failed First Screening";
}

// display
console.log("=== Scholarship Screening Result ===");
console.log(`Student Name             : ${studentName}`);
console.log(`GPA                      : ${GPAfajar}`);
console.log(`Family Income            : Rp${FamilyIncomeFajar.toLocaleString("id-ID")}`);
console.log(`Competition Count        : ${comptCountFajar}`);
console.log(`Has Disciplinary Record  : ${hasDisciplanaryRecord ? "Yes" : "No"}`);
console.log(`Documents Complete       : ${documentsComplete ? "Yes" : "No"}`);
console.log(`Result                   : ${resultMessage}`);
