/**
 * A company wants to create an employee salary management system.
 * Each employee has:
 * - Employee ID
 * - Name
 * - Position
 * - Basic salary
 * - Performance bonus
 * 
 * for example:
 * | Property     | Value            |
 * | ------------ | ---------------- |
 * | Employee ID  | EMP001           |
 * | Name         | Kevin De Bruyne  |
 * | Position     | Senior Developer |
 * | Basic Salary | Rp12,000,000     |
 * | Bonus        | Rp2,000,000      |
 * 
 * The company does not want employees or other parts of the application to directly modify their salary.
 * Student Tasks
 * - Create class Employee
 * - Use private properties for sensitive data such as:
 *   * private basicSalary: number;
 *   * private bonus: number;
 * - Create methods:
 *   * getBasicSalary()
 *   * setBasicSalary()
 *   * addBonus()
 *   * getTotalSalary()
 *   * showProfile()
 * - Business Rules
 *   * setBasicSalary():
 *     - Salary cannot be negative.
 *     - Salary must be greater than 0.
 *   * addBonus():
 *     - Bonus cannot be negative.
 *   * getTotalSalary():
 *     - basicSalary + bonus
 * - Implement class with object
 */

class Employee {
  private basicSalary: number;
  private bonus: number = 0;

  constructor(
    public employeeID: string,
    public name: string,
    public position: string,
    basicSalary: number
  ) {
    this.basicSalary = basicSalary;
  }

  getBasicSalary(): number {
    return this.basicSalary;
  }

  setBasicSalary(salary: number, callback: (message: string) => void): void {
    if (salary <= 0) {
      callback(" Gaji harus lebih dari 0!");
      return;
    }
    this.basicSalary = salary;
    callback(`Gaji diubah menjadi Rp${salary.toLocaleString("id-ID")}`);
  }

  addBonus(bonusAmount: number, callback: (message: string) => void): void {
    if (bonusAmount < 0) {
      callback(" Bonus tidak boleh negatif!");
      return;
    }
    this.bonus += bonusAmount;
    callback(`✓ Bonus ditambah Rp${bonusAmount.toLocaleString("id-ID")}`);
  }

  getTotalSalary(): number {
    return this.basicSalary + this.bonus;
  }

  showProfile(callback: (info: string) => void): void {
    const info = `
ID: ${this.employeeID}
Nama: ${this.name}
Posisi: ${this.position}
Gaji Pokok: Rp${this.basicSalary.toLocaleString("id-ID")}
Bonus: Rp${this.bonus.toLocaleString("id-ID")}
Total: Rp${this.getTotalSalary().toLocaleString("id-ID")}`;
    callback(info);
  }
}

const employee = new Employee(
  "EMP001",
  "Kevin De Bruyne",
  "Senior Developer",
  12000000
);

console.log("=== PROFIL AWAL ===");
employee.showProfile((info) => {
  console.log(info);
});

console.log("\n=== TAMBAH BONUS ===");
employee.addBonus(2000000, (message) => {
  console.log(message);
});

console.log("\n=== PROFIL SETELAH BONUS ===");
employee.showProfile((info) => {
  console.log(info);
});

console.log(`\n=== TOTAL GAJI ===`);
console.log(`Rp${employee.getTotalSalary().toLocaleString("id-ID")}`);

console.log("\n=== UBAH GAJI ===");
employee.setBasicSalary(13000000, (message) => {
  console.log(message);
});

console.log("\n=== PROFIL AKHIR ===");
employee.showProfile((info) => {
  console.log(info);
});

// ========== EMPLOYEE KEDUA ==========

console.log("\n\n=== EMPLOYEE KEDUA ===");
const employee2 = new Employee(
  "EMP002",
  "Erling Haaland",
  "Junior Developer",
  8000000
);

employee2.showProfile((info) => {
  console.log(info);
});

employee2.addBonus(1500000, (message) => {
  console.log(message);
});

employee2.showProfile((info) => {
  console.log(info);
});