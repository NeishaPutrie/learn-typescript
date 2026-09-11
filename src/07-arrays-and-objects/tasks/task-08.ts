/**
 * A company evaluates employees based on several projects.
 * Tasks:
 * 1. Calculate each employee's average score format {name, averageScore}
 * 2. Find employees whose average score is above 85.
 * 3. Find employees who have at least one project with a score below 80.
 */
const employees = [
    {
        name: "Andi",
        department: "Backend",
        projects: [
            { name: "LMS", score: 90 },
            { name: "Payment", score: 85 },
            { name: "API", score: 95 },
        ],
    },
    {
        name: "Budi",
        department: "Frontend",
        projects: [
            { name: "Dashboard", score: 80 },
            { name: "Landing Page", score: 75 },
        ],
    },
    {
        name: "Citra",
        department: "Backend",
        projects: [
            { name: "LMS", score: 95 },
            { name: "API", score: 88 },
        ],
    },
];

type EmployeeAverage = {
    name: string
    averageScore: number
}

const employeeAverages: EmployeeAverage[] = []

for (let i = 0; i < employees.length; i++) {
    const employee = employees[i]

    let totalScore = 0
    for (let j = 0; j < employee.projects.length; j++) {
        totalScore = totalScore + employee.projects[j].score
    }

    const averageScore = totalScore / employee.projects.length

    const employeeData: EmployeeAverage = {
        name: employee.name,
        averageScore: averageScore
    }

    employeeAverages.push(employeeData)
}

console.log(employeeAverages)
console.log("")

const highPerformers: EmployeeAverage[] = []
 
for (let i = 0; i < employeeAverages.length; i++) {
    if (employeeAverages[i].averageScore > 85) {
        highPerformers.push(employeeAverages[i])
    }
}

console.log(highPerformers)
console.log("")
 

type EmployeeWithLowScore = {
    name: string
    lowestScore: number
}
 
const employeesWithLowScore: EmployeeWithLowScore[] = []
 
for (let i = 0; i < employees.length; i++) {
    const employee = employees[i]
    let hasLowScore = false
    let lowestScore = 100
    
    // Cek semua project milik karyawan
    for (let j = 0; j < employee.projects.length; j++) {
        const projectScore = employee.projects[j].score
        
        // Jika ada score < 80, tandai sebagai true
        if (projectScore < 80) {
            hasLowScore = true
        }

        if (projectScore < lowestScore) {
            lowestScore = projectScore
        }
    }

    if (hasLowScore) {
        const employeeData: EmployeeWithLowScore = {
            name: employee.name,
            lowestScore: lowestScore
        }
        employeesWithLowScore.push(employeeData)
    }
}

console.log(employeesWithLowScore)
console.log("")
 
for (let i = 0; i < employeeAverages.length; i++) {
    const avgData = employeeAverages[i]
    
    console.log(`\nKaryawan: ${avgData.name}`)
    console.log(`Average Score: ${avgData.averageScore.toFixed(2)}`)
    
    // Cek apakah score > 85
    if (avgData.averageScore > 85) {
        console.log("High Performer (Score > 85)")
    } else {
        console.log("Needs Improvement")
    }
    
    // Cek apakah ada project dengan score < 80
    let hasLowProject = false
    for (let j = 0; j < employees[i].projects.length; j++) {
        if (employees[i].projects[j].score < 80) {
            hasLowProject = true
            break
        }
    }
    
    if (hasLowProject) {
        console.log("Ada project dengan score < 80")
    }
}
 