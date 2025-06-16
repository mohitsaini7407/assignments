const prompt = require('prompt-sync')();

let num = parseFloat(prompt("Enter a number: "));

if (num > 0) {
    console.log("The number is Positive.");
} else if (num < 0) {
    console.log("The number is Negative.");
} else {
    console.log("The number is Zero.");
}
