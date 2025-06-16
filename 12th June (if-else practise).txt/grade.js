const prompt = require('prompt-sync')();

let score = parseFloat(prompt("Enter your score (0-100): "));

if (score >= 90) {
    console.log("Grade A");
} else if (score >= 75) {
    console.log("Grade B");
} else if (score >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}
