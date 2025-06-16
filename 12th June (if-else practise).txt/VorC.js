const prompt = require('prompt-sync')();

let char = prompt("Enter a single alphabet character: ").toLowerCase();

if (char.length !== 1 || !(/[a-z]/).test(char)) {
    console.log("Invalid input. Please enter a single alphabet letter.");
} else if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    console.log(`${char} is a vowel.`);
} else {
    console.log(`${char} is a consonant.`);
}
