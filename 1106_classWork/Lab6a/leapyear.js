
function leapYear() {
    const inputYear = prompt("Please enter the year");
    let leapYearCheck = parseInt(inputYear) % 4;
    if (leapYearCheck == 0) {
        leapYearCheck = parseInt(inputYear) % 100;
        if (leapYearCheck == 0) {
            leapYearCheck = parseInt(inputYear) % 400;
            if (leapYearCheck == 0) {
                console.log("Leap year");
            }
            else {
                console.log("Common year");
            }
        }
        else {
            console.log("Leap year");
        }
    }
    else {
        console.log("Common year");
    }
}

leapYear(); 