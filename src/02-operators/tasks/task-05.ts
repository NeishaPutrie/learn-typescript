/**
 * A university is selecting students for a full scholarship.
 * A student will receive the scholarship only if all of the following requirements are satisfied:
 * - GPA is at least 3.75
 * - Family monthly income is less than Rp5,000,000
 * - The student has participated in at least 3 competitions
 * - The student has no disciplinary violations
 * - The student has completed all administrative documents.
 * 
 * The admissions office receives the following student information.
 * | Information             | Value      |
 * | ----------------------- | ---------- |
 * | Student Name            | Alya Putri |
 * | GPA                     | 3.89       |
 * | Family Income           | 4200000    |
 * | Competition Count       | 4          |
 * | Has Disciplinary Record | No         |
 * | Documents Complete      | Yes        |
 * 
 * If the student qualifies:
 *  - Scholarship Amount = Rp12,000,000
 * 
 * Otherwise:
 *  - Scholarship Amount = Rp0
 * 
 * Finally, the system should also calculate how much funding remains if the 
 * university has a total scholarship budget of Rp500,000,000.
 * 
 * Task:
 * - Evaluate every requirement using comparison operators.
 * - Combine all conditions using logical operators.
 * - Determine the scholarship amount using the ternary operator.
 * - Calculate the remaining scholarship budget.
 * - Display whether the student is accepted.
 */

// === data ===
const studentName: string = "Alya Putri";
const GPA: number = 3.89;
const familyIncome: number = 4200000;
const competitionCount: number = 4;
const hasDisciplinaryRecord: boolean = false;
const documentsComplete: boolean = true;

//=== syarat nyaaa ===
const minGPA: number = 3.75;
const maxFamilyIncome: number = 5000000;
const minCompetitionCount: number = 3;

//=== anggaran ===
const scholarshipAmount: number = 12000000;
const totalBudget: number = 500000000;

//=== evaluasi syaratnyaa ===
const isGPAokay: boolean = GPA >= minGPA;
const isIncomeACC: boolean = familyIncome < maxFamilyIncome;
const isCompetitionOkay: boolean = competitionCount >= minCompetitionCount;
const isDisciplineClean: boolean = hasDisciplinaryRecord === false;
const isDocumentComplete: boolean = documentsComplete === true;

//=== gabungin kondisi pakai logical operator && ===
const isEligible: boolean =
    isGPAokay &&
    isIncomeACC &&
    isCompetitionOkay &&
    isDisciplineClean &&
    isDocumentComplete;

//=== hitung nominal pakai ternary operator ===
const finalScholarship: number = isEligible ? scholarshipAmount : 0;

//=== hitung sisa budget ===
const remainingBudget: number = totalBudget - finalScholarship;

//=== tampilkan hasil ===
const checks = [
    { label: `GPA (>= ${minGPA})`, value: GPA, pass: isGPAokay },
    { label: `Pendapatan (< Rp${maxFamilyIncome})`, value: `Rp${familyIncome}`, pass: isIncomeACC },
    { label: `Kompetisi (>= ${minCompetitionCount})`, value: competitionCount, pass: isCompetitionOkay },
    { label: "Bebas Pelanggaran", value: !hasDisciplinaryRecord, pass: isDisciplineClean },
    { label: "Dokumen Lengkap", value: documentsComplete, pass: isDocumentComplete },
];

console.log("=== Hasil Seleksi Beasiswa ===");
console.log(`Nama Mahasiswa : ${studentName}`);
checks.forEach(({ label, value, pass }) =>
    console.log(`${label.padEnd(28)}: ${value} -> ${pass}`)
);
console.log("-------------------------------");
console.log(`Status Diterima         : ${isEligible ? "DITERIMA" : "TIDAK DITERIMA"}`);
console.log(`Jumlah Beasiswa         : Rp${finalScholarship}`);
console.log(`Sisa Budget Universitas : Rp${remainingBudget}`);

