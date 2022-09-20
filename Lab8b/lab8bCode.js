function calculationXY(submit) {

    // The function is called and x and y is assigned a value
    console.log("calculationXY got called");
    let x = parseInt($("#x").val());
    let y = parseInt($("#y").val());

    // The variable which will calculate and display the result
    let result;
    let text;

    // This variable will contain the remove button
    const removeButton = `<button class="hide"> remove </button>`;

    // This switch statement evaluates which operation to use +, -, * or /
    switch (submit) {

        case "add":
            result = x + y;
            tempRes = `${x} + ${y} = ${result}`;
            text = `<span class="addStyles">${tempRes}</span>`;
            break;
        case "subtract":
            result = x - y;
            tempRes = `${x} - ${y} = ${result}`;
            text = `<span class="subStyles">${tempRes}</span>`;
            break;
        case "multiply":
            result = x * y;
            tempRes = `${x} x ${y} = ${result}`;
            text = `<span class="multiStyles">${tempRes}</span>`;
            break;
        case "divide":
            result = x / y;
            tempRes = `${x} / ${y} = ${result}`;
            text = `<span class="divStyles">${tempRes}</span>`;
            break;
        default:
            console.log("ERROR");
    }

    // Show the cuurent operation
    $("#temp").html(`Result: ${tempRes}`);

    // History
    $("#history").append(`<div class="pastCalcs">${text} ${removeButton}</div>`);
}

function hide_() {

    // This function is going to trigger when removeButton is pressed
    $(this).parent().remove();
}

function setup() {

    // This triggers at the start and awaits further instructions through operation buttons
    console.log("setup () got called!");
    $(".submit").click(function () { calculationXY(this.id) });

    // This command only triggers when remove button is pressed
    $("body").on("click", ".hide", hide_);
}

$(document).ready(setup);