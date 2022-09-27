
// Capture that button element in the script
// const button = document.getElementById("click");
// console.log(button);


// Way Capture the button element using the tag
// const button = documnet.getElementsbyTagName("button");
// console.log(button);

// Way 3
// const button = document.querySelector("#click");
// console.log(button);

// Way 4 Query selector gets the first element which appears
const button1 = document.querySelector("#click");
console.log(button1);

// Query selector all gets all the eleemtsn which match this class
const buttons = document.querySelectorAll(".btn");
console.log(buttons, "All");



// Event handler and listener for button1

// button1.addEventListener("click", function() {
//     console.log("Fired");
// });

// Capture Container element
const container = document.querySelector(".container");
console.log(container);

// Event handler and listener for container element
container.addEventListener("mouseenter", () => {
    console.log("Mouse entered");
});

const mouseLeft = () => {
    console.log("Mouse Left")
}

container.addEventListener("mouseleave", mouseLeft);

// Capture img element

const image = document.querySelector("img");

const originalImage = image.src;
const newImage = "https://img.freepik.com/free-photo/beautiful-scenery-phragmites-plants-by-sea-with-swimming-pelican-sunset_181624-37787.jpg";

let toggleMe = true;
// Changing imaging using add event listener
button1.addEventListener("click", function() {
    if (toggleMe) {
        image.src = newImage;
        toggleMe = false;
    }
    else {
        image.src = originalImage;
        toggleMe = true;
    }
});

const changeColourButton = document.querySelector("#changeColour");

changeColourButton.addEventListener("click", () => {
    container.classList.remove("green");

    setTimeout(() => {
        container.classList.add("hidden");
    }, 2000);

})


// Using InnerHTML to add html elements

// const table = document.querySelector("#myTable");
// table.innerHTML = `<tr><th>Name</th><th>Email</th></tr>
// <tr>
//     <td>Prabh</td>
//     <td>pgambhir@vcc.ca</td>
// </tr>
// `;


// Adding text using Text Content
// const paragraph = document.querySelector("p");
// paragraph.textContent = "Hello this is paragraph";


// Creating table elements using Javascript

const newTable = document.createElement("table");
let tableRowLength = 5;
let tableDataLength = 4;

for (let i = 0; i < tableRowLength; i++) {
    const tr = document.craeteElement("tr");

    for (let j = 0; j < tableDataLength; j++) {
        const td = document.createElement("td");
        td.textContent = "Data " + j;
        tr.appendChild(td);
    }

    newTable.appendChild(tr);
}

const newTableContainer = document.querySelector("#newTableContainer");
newTableContainer.appendChild(newTable);
console.log(newTable);

function greeting() {
    alert("Hello Gian!");
}