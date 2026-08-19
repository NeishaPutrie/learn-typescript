/**
 * A company pays employees based on their monthly salary and overtime hours.
 * Employee Information:
 * | Information    | Value   |
 * | -------------- | ------- |
 * | Employee Name  | Dimas   |
 * | Basic Salary   | 5000000 |
 * | Overtime Hours | 12      |
 * | Overtime Rate  | 50000   |
 *
 * 
 * The company has the following policy:
 * Employees who work more than 10 overtime hours receive an additional Rp300,000 performance bonus.
 * 
 * Otherwise, no bonus is given.
 * You need to calculate and display:
 * - Overtime pay
 * - Bonus
 * - Final salary
 */

const EmployeeName: string = "Dimas";
const BasicSalary: number = 5000000;
const overhour: number = 12;
const overtimerate: number = 50000;

const overtimeBonus: number = 10;
const bonusAmount: number = 300000;

const YesOrNo: boolean = overhour > 13;

const overtimePay: number = overhour * overtimerate;
const bonus: number = overhour > overtimeBonus ?  bonusAmount : 0;

const finalSalary: number = BasicSalary + overtimePay + bonus;


console.log(`Nama Karyawan : ${EmployeeName}`);
console.log(`Overtime Hours : ${overhour}`)
console.log(`Bonus Accepted : ${YesOrNo}`);
console.log(`Overtime Pay  :  Rp${overtimePay}`);
console.log(`Bonus         : Rp${bonus}`);
console.log(`Final Salary  : Rp${finalSalary}`);