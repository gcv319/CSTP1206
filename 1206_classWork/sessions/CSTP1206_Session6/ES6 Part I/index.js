// This Keyword

const { getSystemErrorName } = require("util");

// This keyword referes to the current object that's ----> name

var name = "Daniel";

let obj = {
    name: "Prabh",
    getName: function () {
        console.log(this.name);
    }
}

obj.getName();


// Main difference is based on "this" keyword
var game = "Call of Duty"

let obj2 = {
    game: "Apex",
    getGame: () => { // By using the arrow function, the reference to this changes to global
        console.log(this.game);
    }
}

obj2.getGame(); // Call of Duty

var city = "Montreal";

let student = {
    name: "Daniel",
    college: "VCC",
    city: "Toronto",
    address: {
        city: "Vancouver",
        province: "BC",
        getCity: function() {
            console.log(this.city)
        }
    }
}

student.address.getCity(); // Vancouver (BECAUSE WE ARE IT IS HOISTED)

let student2 = {
    name: "Daniel",
    college: "VCC",
    city: "Toronto",
    address: {
        city: "Vancouver",
        province: "BC",
        getCity: () => {
            console.log(this.city)
        }
    }
}

student2.address.getCity(); // Montreal (BECAUSE WE ARE USING Arrow Functions)

// HOISTING ********

// HOISTING IN VAR KEYWORDS

console.log(collegeName); // Underfined

var collegeName = "VCC";

// ------ The above representation will be written by parser as below and that's
// why it is undefined

var collegeName;

console.log(collegeName);

collegeName = "VCC";

// HOISTING IN FUNCTION KEYWORD

function getMyName() {
    console.log("Hey I am Prabh");
}

// The above representation gets hoisted to the top of the function
function getMyName() {
    console.log("Hey I am Prabh");
}

getMyName(); // Hey I am Prabh

// This gives reference error
console.log(country);
let country = "Canada";