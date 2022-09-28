// This is a variable which gets the button from the html file
const enterButton = document.querySelector("#enter_button");
console.log(enterButton);

// When the button is clicked we will perform gather the user information and save it to the table
enterButton.addEventListener("click", () => {
    console.log("I have been clicked!");
})