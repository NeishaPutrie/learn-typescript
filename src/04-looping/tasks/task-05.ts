/**
 * A programming competition stores participants' scores in the following array.
 * 
 * 
 * Competition Rules
 * Gold Medal : score ≥ 95
 * Silver Medal : score 85–94
 * Bronze Medal : score 75–84
 * No Medal : below 75
 * 
 * 
 * Student Tasks
 * Using a loop, calculate:
 * - Number of Gold Medal winners
 * - Number of Silver Medal winners
 * - Number of Bronze Medal winners
 * - Number of students without medals
 * - Average competition score
 */

const scores = [
    98, 76, 85, 62, 91,
    73, 88, 59, 100, 81,
    67, 79, 94, 83, 71,
    96, 65, 87, 74, 90
];

let goldCount = 0;
let silverCount = 0;
let bronzeCount = 0;
let noMedalCount = 0;
let totalScore = 0;

for (let i = 0; i < scores.length; i++) {
    const score = scores[i];

    totalScore += score;

    if (score >= 95) {
        goldCount++;
    } else if (score >= 85) {
        silverCount++;
    } else if (score >= 75) {
        bronzeCount++;
    } else {
        noMedalCount++;
    }
}

const averageScore = totalScore / scores.length;

console.log("--------------------------------------------");
console.log(`Total participants     : ${scores.length}`);
console.log(`Gold Medal winners     : ${goldCount}`);
console.log(`Silver Medal winners   : ${silverCount}`);
console.log(`Bronze Medal winners   : ${bronzeCount}`);
console.log(`No Medal                : ${noMedalCount}`);
console.log(`Average score           : ${averageScore.toFixed(2)}`);
console.log("--------------------------------------------");