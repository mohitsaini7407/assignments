const prompt = require('prompt-sync')();

let num1 = parseFloat(prompt("Enter first number: "));
let num2 = parseFloat(prompt("Enter second number: "));

if (num1 === num2) {
    console.log("Both numbers are equal.");
} else if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}.`);
} else {
    console.log(`${num2} is greater than ${num1}.`);
}
