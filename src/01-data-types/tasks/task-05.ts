/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */

// 1. Define a type for attendance information
type Attendance = {
  employeeId: string;
  employeeName: string;
  date: string;
  checkInTime: string;
  checkOutTime: string;
  totalWorkingHours: number;
  isPresent: boolean;
};

// 2. Implement the type on 3 attendance records
const attendanceRecords: Attendance[] = [
  {
    employeeId: "EMP001",
    employeeName: "Alice Johnson",
    date: "2026-07-27",
    checkInTime: "09:02",
    checkOutTime: "17:05",
    totalWorkingHours: 8,
    isPresent: true,
  },
  {
    employeeId: "EMP002",
    employeeName: "Brian Smith",
    date: "2026-07-27",
    checkInTime: "09:15",
    checkOutTime: "17:00",
    totalWorkingHours: 7.75,
    isPresent: true,
  },
  {
    employeeId: "EMP003",
    employeeName: "Cynthia Lee",
    date: "2026-07-27",
    checkInTime: "",
    checkOutTime: "",
    totalWorkingHours: 0,
    isPresent: false,
  },
];

// Display the attendance data
attendanceRecords.forEach((record) => {
  console.log(record);
});

