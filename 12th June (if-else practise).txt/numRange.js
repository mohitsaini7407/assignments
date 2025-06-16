const prompt = require('prompt-sync')();

let num = parseFloat(prompt("Enter a number: "));

if (num >= 10 && num <= 20) {
    console.log("In range.");
} else {
    console.log("Out of range.");
}
