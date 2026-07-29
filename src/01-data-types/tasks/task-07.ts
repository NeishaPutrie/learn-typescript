/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

type registration = {
    studentID: string;
    studentName: string;
    GradeLevel: number;
    courseID: string;
    courseTittle: string;
    instName: string;
    TotalHours: number;
    regristationDate: string;
    isPaymentcomplete: boolean;
};

const studentData: registration = {
    studentID: "5422GD5",
    studentName: "neishaa",
    GradeLevel: 10,
    courseID: "MTK125",
    courseTittle: "MTK",
    instName:   "Eka",
    TotalHours: 9,
    regristationDate: "24-02-26",
    isPaymentcomplete: true
};

const studentData2: registration = {
    studentID: "5422GD6",
    studentName: "najwaa",
    GradeLevel: 12,
    courseID: "RPL125",
    courseTittle: "RPL",
    instName:   "Aulia",
    TotalHours: 12,
    regristationDate: "26-02-26",
    isPaymentcomplete: true
};

const studentData3: registration = {
    studentID: "5422GD6",
    studentName: "ninaa",
    GradeLevel: 11,
    courseID: "TKJ125",
    courseTittle: "TKJ",
    instName:   "Hana",
    TotalHours: 13,
    regristationDate: "28-02-26",
    isPaymentcomplete: false
};

console.log("Student 1 : ", studentData);
console.log("Student 2 : ", studentData2);
console.log("Student 3 : ", studentData3);