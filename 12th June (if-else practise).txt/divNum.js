const prompt = require('prompt-sync')();

let num = parseInt(prompt("Enter a number: "));

if (num % 5 === 0 && num % 11 === 0) {
    console.log("The number is divisible by both 5 and 11.");
} else {
    console.log("The number is not divisible by both 5 and 11.");
}
