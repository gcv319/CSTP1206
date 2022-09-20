// objects

let student = {
    name : "Harinder",
    college : "VCC",
    age : 20,
    hobbies : ["Drinking Water", "Studying"],
    address : {
        city : "Surrey",
        province :"BC"
    },
    study : function () {
        console.log("Harinder likes to study Networks");
    }
}

// Methods inside of console object
// console.log();
// console.error();
// console.table();

// MAPS
// They are also key value pair and they are inherited from the Objects
// Because when they were made they were made interable, you can use forEach loop
// The keys inside a map, can also be an object
// Maps the keys are organized

// Map class instance
let map = new Map();

console.log(student.name); // Accessing properties by . operator
console.log(student['college']); // VCC


