/**
 * A company has different types of employees.
 * Every employee has:
 * - Name
 * - Employee ID
 * - Basic salary
 * 
 * However, the way their total salary is calculated differs.
 * - Full-Time Employee receive Basic Salary + Fixed Allowance
 * - Part-Time Employee receive Basic Salary + Hours Worked × Hourly Rate
 * 
 * example:
 * Fulltime Employee
 * Name: Mohamed Salah
 * Basic Salary: Rp8,000,000
 * Allowance: Rp1,500,000
 * 
 * ParttimeEmployee
 * Name: Erling Haaland
 * Basic Salary: Rp2,000,000
 * Hours Worked: 40
 * Hourly Rate: Rp50,000
 * 
 */

class Employee {
    constructor(
        public name: string,
        public employeeID: string,
        protected basicSalary: number
    ) {}

    calculateSalary(): number {
        return this.basicSalary
    }
}

class FullTimeEmployee extends Employee {
    allowance: number;

    constructor(
    name: string,
    employeeId: string,
    basicSalary: number,
    allowance: number
    ){
        super(name, employeeId, basicSalary);
        this.allowance = allowance;
    }

    calculateSalary(): number {
        return this.basicSalary + this.allowance;
    }
}

class PartTimeEmployee extends Employee {
    hoursWorked: number;
    hourlyRate: number;

    constructor(
    name: string,
    employeeID: string,
    basicSalary: number,
    hoursWorked: number,
    hourlyRate: number
  ) {
    super(name, employeeID, basicSalary);
    this.hoursWorked = hoursWorked;
    this.hourlyRate = hourlyRate;
  }

    calculateSalary(): number {
        return this.basicSalary + (this.hoursWorked * this.hourlyRate);
    }
}

/** implement of polymorphism */
const employees: Employee[] = [
    new FullTimeEmployee(`Mohamed Salah`, `111`, 800000, 1500000),
    new PartTimeEmployee(`Erling Haaland`, `112`, 2000000, 40, 50000)
]

for (const employee of employees) {
    console.log(`${employee.name} receive ${employee.calculateSalary()}`);
}