/**
 * A university stores enrollment information at following array
 * The university needs a report containing:
 * - Total students
 * - Active students
 * - Inactive students
 * - Software Engineering students
 * - Networking students
 * - Multimedia students
 * 
 * Complete following functions!
 */

const students = [
  {
    name: "Alya",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Budi",
    major: "Networking",
    active: false
  },
  {
    name: "Citra",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Dimas",
    major: "Multimedia",
    active: true
  },
  {
    name: "Eka",
    major: "Networking",
    active: false
  }
];

function countActiveStudents(
  students: { name: string; major: string; active: boolean}[]
){
  let MahasiswaAktif: number = 0;

  for (let i = 0; i < students.length; i++) {
    let aktif = students[i];

    if(aktif.active) {
      MahasiswaAktif++;
    }
  }
  return MahasiswaAktif;
}

function CountInactiveStudents(
  students: { name: string; major: string; active: boolean}[]
) {
  let MahasiswaNonAktif: number = 0;

  for(let i = 0; i < students.length; i++) {
    let nonAktif = students[i];

    if (!nonAktif.active) {
      MahasiswaNonAktif++;
    }
  }

  return MahasiswaNonAktif;
}

function countStudentsBymajor(
  students: { name: string; major: string; active: boolean} [],
  major: string
) {
  let count: number = 0;

  for (let i = 0; i < students.length; i++) {
    if(students[i].major === major) {
      count++;
    }
  }

  return count;
}

function printEnrollmentReport() {
  console.log("Enrollment Report  : ");
  console.log("Total Students :" + students.length);
  console.log("Active students : " + countActiveStudents(students));
  console.log("Inactive students : " + countActiveStudents(students));

  console.log(
    "Software Engineering students  : " +
    countStudentsBymajor(students, "Software Engineering")
  );

  console.log(
    "Networking students : " + 
    countStudentsBymajor(students, "Networking")
  );

  console.log(
    "Multimedia students : " +
    countStudentsBymajor(students, "Multimedia")
  );
}

printEnrollmentReport();
