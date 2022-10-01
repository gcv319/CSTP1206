// This is a variable which gets the button from the html file
const enterButton = document.querySelector("#enterButton");
console.log(enterButton);

// This function will insert a new row with the given info into the table
const insertUserInfo = (name, email, id) => {
    // I put the paramters into an object so we can access it later
    let tempStorage = {name, email, id};

    let tableInfo = document.getElementById("userInfo");
    let newRow = tableInfo.insertRow();

    // This goes through the object which contains the data
    // and it adds it to the HTML table
    for (let value in tempStorage) {
        let newData = newRow.insertCell();
        newData.innerHTML = tempStorage[value]; 
    }
}
// When the button is clicked we will perform gather the user information and save it to the table
enterButton.addEventListener("click", () => {
    let nameValue = document.getElementById("studentName").value;
    let emailValue = document.getElementById("studentEmail").value;
    let studentIDValue = document.getElementById("studentID").value;

    insertUserInfo(nameValue, emailValue, studentIDValue);
})