// Arrays used to store collection of data

let studentList = []; // There is no data inside

let students = ["Kevin", "David"]; // Array with string values

let list = ["Kevin", 30, true]; // Array with multiple types of variables

list[0] // "Kevin"
list[10] // undefined

list[3] = "David";

console.log(list.length); // 4

// Push Method (Adds element in the last index of the array)

let fruitsList = ["Apples", "Mangoes"];

fruitsList.push("Pineapple", "Orange", "Kiwi");

console.log(fruitsList); // ["Apples", "Mangoes", "Pineapple", "Orange", "Kiwi"]

fruitsList.unshift("Bananas", "Grapes");

console.log(fruitsList, "After using unshift");

fruitsList.pop();

console.log(fruitsList, "after pop")

fruitsList.shift();

console.log(fruitsList, "after shift");