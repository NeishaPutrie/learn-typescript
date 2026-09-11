/**
 * A university wants to analyze the scores of students enrolled in Backend Development.
 * The dean requests several statistics.
 * Instead of writing one long program, the developer decides to divide the work into reusable functions.
 * Required calculations:
 * Highest score
 * Lowest score
 * Average score
 * Number of students who passed (passing score = 75)
 * 
 * Finally, another function should display the complete report.
 * Student Tasks
 * 1. Create function to find highest value.
 * 2. Create function to find lowest value.
 * 3. Create function to find average value.
 * 4. Create function to return number of passing students.
 */

const scores = [
  82,
  91,
  76,
  88,
  69,
  94,
  73,
  85,
  79,
  97
];

function findHighestScore(scores: number[]): number {
  let highest = scores[0];

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > highest) {
      highest = scores[i];
    }
  }

  return highest;
}

// 2. Mencari nilai terendah
function findLowestScore(scores: number[]): number {
  let lowest = scores[0];

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] < lowest) {
      lowest = scores[i];
    }
  }

  return lowest;
}

// 3. Menghitung rata-rata
function calculateAverage(scores: number[]): number {
  let total = 0;

  for (let i = 0; i < scores.length; i++) {
    total = total + scores[i];
  }

  return total / scores.length;
}

// 4. Menghitung jumlah siswa yang lulus
function countPassedStudents(scores: number[]): number {
  let passed = 0;

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= 75) {
      passed++;
    }
  }

  return passed;
}