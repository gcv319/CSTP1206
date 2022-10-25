// This is the object which contains the students info
let student = [
    {
        name: "Daniel",
        email: "daniel@gmail.com",
        marks: [80, 60, 50, 70, 95]
    },
    {
        name: "Mark",
        email: "mark@gmail.com",
        marks: [99, 40, 84, 72, 60]
    },
    {
        name: "Stacy",
        email: "stacy@gmail.com",
        marks: [8, 30, 11, 0, 20]
    },
    {
        name: "Geri",
        email: "geri@gmail.com",
        marks: [100, 99, 95, 85, 99]
    }
];

// This function finds the student with the highest total marks and returns it
function studentWithHighestMarks(array) {
    // // variables which we will use to help determine who has the highest mark
    let highestMarks = [];

    // This forEach goes through the array objects and calculates
    // the total marks of each student and pushes it to an array
    array.forEach((item) => {
        let sum = item.marks.reduce((accumulator, currentValue) => {
            return accumulator + currentValue
        }, 0);

        highestMarks.push(sum);
    });

    // This gets the highest mark in the array
    let topStudent = Math.max(...highestMarks);

    // finally we use the highestmark to get the student's name and return it
    return student[highestMarks.indexOf(topStudent)].name;
}

console.log(studentWithHighestMarks(student));