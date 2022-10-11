function greet() {
    console.log("Hello Prabh");
}

// Callbacks - Call me back whenever you are ready
// When a funciton is passed as a pramater to other function so that it
// can be called later

function sayHi(callback) {
    callback();
}

sayHi(greet);