/**
 * An online exam has students and questions.
 * Tasks:
 * 1. Calculate each student's score (each correct answer get 25 points)
 * 2. Determine each student's correct answer, exp: [{student:"Andi", correct:0, wrong: 4}]
 * 3. Calculate the average score for each category.
 * 4. Generate final exam analytics
 * expeced result: {
        totalStudents: 3,
        averageScore: 66.67,
        highestScore: 100,
        lowestScore: 50,
        passedStudents: 1,
        failedStudents: 2,
        passRate: 33.33
    }
 */
const questions = [
    {
        id: 1,
        question: "What is TypeScript?",
        correctAnswer: "A",
        category: "TypeScript",
    },
    {
        id: 2,
        question: "Which method transforms an array?",
        correctAnswer: "B",
        category: "Array",
    },
    {
        id: 3,
        question: "Which method filters an array?",
        correctAnswer: "C",
        category: "Array",
    },
    {
        id: 4,
        question: "What does reduce() do?",
        correctAnswer: "D",
        category: "Array",
    },
];

const submissions = [
    {
        student: "Andi",
        answers: [
            { questionId: 1, answer: "A" },
            { questionId: 2, answer: "B" },
            { questionId: 3, answer: "C" },
            { questionId: 4, answer: "D" },
        ],
    },
    {
        student: "Budi",
        answers: [
            { questionId: 1, answer: "B" },
            { questionId: 2, answer: "B" },
            { questionId: 3, answer: "A" },
            { questionId: 4, answer: "D" },
        ],
    },
    {
        student: "Citra",
        answers: [
            { questionId: 1, answer: "A" },
            { questionId: 2, answer: "C" },
            { questionId: 3, answer: "C" },
            { questionId: 4, answer: "B" },
        ],
    },
];

const studentResults = []

for (let i = 0; i < submissions.length; i++) {
    let correct = 0
    for (let j = 0; j < submissions[i].answers.length; j++) {
        const ans = submissions[i].answers[j]

        const q = questions.find(q => q.id === ans.questionId)

        if (q && ans.answer === q.correctAnswer) correct++
    }
    studentResults.push({ student: submissions[i].student, score: correct * 25, correct, wrong: 4 - correct })
}
console.log(studentResults)
 

const categories = ["TypeScript", "Array"]
const categoryScores = []
 
for (let cat of categories) {
    let totalScore = 0, count = 0
    for (let sub of submissions) {
        for (let ans of sub.answers) {
            const q = questions.find(q => q.id === ans.questionId && q.category === cat)
            if (q && ans.answer === q.correctAnswer) totalScore += 25
            if (q) count++
        }
    }
    categoryScores.push({ category: cat, averageScore: parseFloat((totalScore / count).toFixed(2)) })
}
console.log(categoryScores)
 

console.log("\n=== TASK 4 ===")
const passScore = 75
const scores = studentResults.map(s => s.score)
const passed = studentResults.filter(s => s.score >= passScore).length
 
const analytics = {
    totalStudents: studentResults.length,
    averageScore: parseFloat((scores.reduce((a, b) => a + b) / scores.length).toFixed(2)),
    highestScore: Math.max(...scores),
    lowestScore: Math.min(...scores),
    passedStudents: passed,
    failedStudents: studentResults.length - passed,
    passRate: parseFloat(((passed / studentResults.length) * 100).toFixed(2))
}
console.log(analytics)
 