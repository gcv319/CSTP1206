
function solve_quad() {

    var a = $("#a").val();
    var b = $("#b").val();
    var c = $("#c").val();

    if (a == 0) {
        console.log("Not a quadratic");
        if (b == 0) {
            console.log("a=0, b=0 bye");
        }
        else {
            var x1 = -c / b;
            console.log(x1);
        }
    }
    else {
        var d = b ** 2 - 4 * a * c;
        if (d < 0) {
            console.log("No real answer. Fail to take the square root of Negative Value");
        }
        else {
            var x1 = (-b + Math.sqrt(d)) / (2 * a);
            var x2 = (-b - Math.sqrt(d)) / (2 * a);
            console.log(x1);
            console.log(x2);
        }
    }
}

function setup(){
    console.log("jQuery works");
    $("#submit").click(solve_quad);
}

$(document).ready(setup);