function calculationXY(submit) {

    // The function is called and x and y is assigned a value
    console.log("calculationXY got called");
    let x = parseInt($("#x").val());
    let y = parseInt($("#y").val());

    // The variable which will calculate and display the result
    let result;
    let text;

    switch (submit) {

        case "add":
            result = x + y;
            tempRes = `${x} + ${y} = ${result}`;
            text = `<span class="addStyles">${x} + ${y} = ${result}</span>`;
            break;
        case "subtract":
            result = x - y;
            tempRes = `${x} - ${y} = ${result}`;
            text = `<span class="subStyles">${x} - ${y} = ${result}</span>`;
            break;
        case "multiply":
            result = x * y;
            tempRes = `${x} x ${y} = ${result}`;
            text = `<span class="multiStyles">${x} x ${y} = ${result}</span>`;
            break;
        case "divide":
            result = x / y;
            tempRes = `${x} / ${y} = ${result}`;
            text = `<span class="divStyles">${x} / ${y} = ${result}</span>`;
            break;
        default:
            console.log("ERROR");
    }

    // Show the cuurent operation
    $("#temp").html(`Result: ${tempRes}`);

    // History
    $("#history").append(text + "<br>");
}

function setup() {

    console.log("setup () got called!");
    $(".submit").click(function () { calculationXY(this.id) });
}

$(document).ready(setup);