/**
 * A student can participate in the graduation ceremony only if all of the following conditions are met:
 * - Final score is at least 75
 * - Attendance is at least 90%
 * - All tuition fees have been paid
 * 
 * Today, the administration receives the following student information.
| Information  | Value |
| ------------ | ----- |
| Final Score  | 82    |
| Attendance   | 94    |
| Tuition Paid | Yes   |

 * Task: Store and display the result in a variable named "isEligible"

 */

const finalScore: number = 80;
const Attendance: number = 94;
const tuitionPaid: boolean = true;

const isEligible: boolean =
    finalScore >= 75 && Attendance >= 90 && tuitionPaid;

console.log("==== Kelayakan Wisuda ====");
console.log(`Nilai Ahkir     : ${finalScore}  (syarat : >= 75) `);
console.log(`Kehadiran       : ${Attendance}% (syarat : >= 90%)`);
console.log(`Lunas SPP       : ${tuitionPaid ? "Ya" : "Belum"}`);
console.log("-----------------------------");
console.log(`Layak wisuda : ${isEligible ? "Layak" : "Tidak layak"}`);

