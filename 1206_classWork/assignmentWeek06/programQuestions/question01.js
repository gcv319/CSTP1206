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
    // variables which we will use to help determine who has the highest mark
    let highestMarks = [];
    let topStudent = 'mark';
    let totalMarks = 0;

    // This for in loop puts the total marks of each student into an array
    for (let key in array) {
        totalMarks = 0;
        for (let score in array[key].marks) {
            totalMarks += array[key].marks[score];
        }
        highestMarks[key] = totalMarks;
    }

    // we go through the array with the total marks and returns the person who has the highest marks
    for (let mark in highestMarks) {
        if (highestMarks[mark] >= totalMarks) {
            totalMarks = highestMarks[mark];
            topStudent = student[mark].name;
        }
    }

    return topStudent;
}

console.log(studentWithHighestMarks(student));