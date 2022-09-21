// Question 1

console.log("Q1");

// This function takes in an integer array and adds all its elements
// to return a sum
const sumOfArray = (arr) => {
    let sum = 0;
    for (let num of arr) sum += num;
    return sum;
}

let arrayNum = [1, 2, 3, 4, 5];
console.log(sumOfArray(arrayNum));

// Question 2

console.log("\nQ2");

// This function will take in an integer and put numbers that are even
// inside of an array and output the results
const printNumToN = (n) => {
    let onlyEvenNums = [];
    for (let i = 0; i <= n; i++) {
        if (i % 2 == 0 && i != 0) {
            onlyEvenNums.push(i);
        }
    }
    return onlyEvenNums;
}

console.log(printNumToN(5));

// Question 3

console.log("\nQ3");

// This function detects if there is the letter 'y' in the string
// regardless of casing
const checkIfLetterY = (word) => {
    word = word.toLowerCase();
    for (let letter of word) if (letter == 'y') return "YES";
}

console.log(checkIfLetterY("HeY"));

// Question 4

console.log("\nQ4");

// This function finds the factorial of a number
const findFactorial = (num) => {
    let facotrial = 1;
    for (let i = 1; i <= num; i++) facotrial *= i;
    return facotrial;
}

console.log(findFactorial(5));

// Question 5

console.log("\nQ5");

// This function outputs the student's accumulative grades
const studentAvgGrade = (grade1, grade2, grade3, grade4) => {
    let avg = (grade1 + grade2 + grade3 +grade4) / 4;
    if (avg > 90) console.log("grade A");
    else if (avg > 70 && avg <= 90) console.log("grade B");
    else if (avg > 50 && avg <= 70) console.log("grade C");
    else console.log("grade F");
}

studentAvgGrade(80, 75, 90, 65);

// Question 6

console.log("\nQ6");

// This function prints out a star pattern depending on what
// integer was placed inside of the parameter
const printStarPattern1 = (n) => {
    let count = 1;
    let starPattern = "*";
    do {
        console.log(starPattern);
        starPattern += "*";
        count++;
    } while (count <= n);
}

printStarPattern1(7);

// Question 7

console.log("\nQ7");

// This function is similar to "printStarPattern1" except that when
// we reach the number the user input we will also output the star pattern
// in decreasing order
const printStarPattern2 = (n) => {
    let maxSize = n * 2;
    let count = 1;
    let starPattern = "*";

    while (count <= maxSize) {
        if (count < n) {        
            console.log(starPattern);
            starPattern += "*";
        }
        else {
            console.log(starPattern);
            starPattern = starPattern.slice(0, starPattern.length - 1);
        }
        count++;
    }
}

printStarPattern2(7);

// Question 8

console.log("\nQ8")

// This function simply reverses the word order
const reverseString = (word) => {
    return word.split("").reverse("").join("");
}

console.log(reverseString("Hello"));