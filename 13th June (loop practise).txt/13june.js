console.log("// 1. Print numbers from 1 to 10 using a loop.")

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("// 2. Print all even numbers from 1 to 20 using a loop.")

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log("// 3. Print the square of numbers from 1 to 5.")

for (let i = 1; i <= 5; i++) {
    console.log(`Square of ${i} is ${i * i}`);
}

console.log("// 4. Print the sum of numbers from 1 to 100 using a loop.")

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(`Sum from 1 to 100 is ${sum}`);

console.log("// 5. Print a multiplication table of 7 (up to 10 times).")

for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

console.log("// 6. Print numbers from 10 to 1 in reverse using a loop.")

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

console.log("// 7. Print only the odd numbers between 15 and 30.")

for (let i = 15; i <= 30; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

console.log("// 8. Print the factorial of a number (e.g., 5! = 120) using a loop.")

let num =5
let fact = 1;

for (let i = 1; i <= num; i++) {
    fact *= i;
}
console.log(`Factorial of ${num} is ${fact}`);

console.log("// 9. Print all numbers between 1 and 50 that are divisible by both 3 and 5.")

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}

console.log("// 10. Count how many numbers between 1 and 100 are divisible by 9.")

let count = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 9 === 0) {
        count++;
    }
}
console.log(`Count of numbers divisible by 9 between 1 and 100 is ${count}`);
