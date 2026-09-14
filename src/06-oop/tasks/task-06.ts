/**
 * A school system needs to store information about people who are part of the school community. 
 * Every person has a name and age.
 * However, students and teachers have different additional information.
 * A student has:
 * - Student ID
 * - Grade
 * 
 * A teacher has:
 * - Employee ID
 * - Subject
 * 
 * Example:
 * Student
 * Name: Kylian Mbappé
 * Age: 17
 * Student ID: ST001
 * Grade: 11
 * 
 * Teacher:
 * Name: Cristiano Ronaldo
 * Age: 38
 * Employee ID: EMP001
 * Subject: Programming
 * 
 * Student Tasks
 * Create a parent class Person with:
 * - name
 * - age
 * - showInfo()
 * 
 * Then create class Student extends Person and class Teacher extends Person
 * Each child class should add its own properties.
 * 
 */
class Person {
    constructor(
        public name: string,
        public age: number
    ) { }

    showInfo(): void {
        console.log(`${this.name}, ${this.age} years old`);
    }
}

class Student extends Person {
    studentID: string;
    grade: number;

    constructor(
        name: string,
        age: number,
        studentId: string,
        grade: number
    ) {
        super(name, age);
        this.studentID = studentId;
        this.grade = grade;
    }

    showInfo(): void {
    console.log(`Student Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Student ID: ${this.studentID}`);
    console.log(`Grade: ${this.grade}`);
    }
}

class Teacher extends Person {
    employeeId: string;
    subject: string;

    constructor(
        name: string,
        age: number,
        employeeId: string,
        subject: string
    ){
        super(name, age);
        this.employeeId = employeeId;
        this.subject = subject;
    }

    showInfo(): void {
    console.log(`Teacher Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Employee ID: ${this.employeeId}`);
    console.log(`Subject: ${this.subject}`);
    }
}

const student1 = new Student(
    "Kylian Mbappe",
    17,
    "ST001",
    11
);

console.log("=== STUDENT 1 ===");
student1.showInfo();

console.log();

const student2 = new Student(
  "Erling Haaland",
  22,
  "ST002",
  12
);

console.log("=== STUDENT 2 ===");
student2.showInfo();

console.log();

const teacher1 = new Teacher(
  "Cristiano Ronaldo",
  38,
  "EMP001",
  "Programming"
);

console.log("=== TEACHER 1 ===");
teacher1.showInfo();

console.log();

// Teacher 2
const teacher2 = new Teacher(
  "Zinedine Zidane",
  50,
  "EMP002",
  "Mathematics"
);

console.log("=== TEACHER 2 ===");
teacher2.showInfo();