// The function which displays all of the
// static info into the DOM
const processData = (x) => {
    data = x;
    pageNumber = 1;
    display();
    selectPage();
}

const display = () => {

    // This clears the page when you enter
    // another value in the search bar in the DOM
    $("#movieResults").empty();
    $("#topRight").empty();

    // This converts the pageSize drop down into
    // an integer which we will use to display the results
    menuValue = parseInt(menuValue);

    // These 2 variables changes
    let firstIndex = menuValue * (pageNumber - 1);
    let lastIndex = menuValue * (pageNumber - 1) + (menuValue - 1);
    // gets all necessary data from api
    // and either displays it or stores
    // it for future use
    for (let i = firstIndex; i <= lastIndex && i < data.results.length; i++) {
        $("#movieResults").append(`${data.results[i].original_title}<br>`);
        $("#movieResults").append(`${data.results[i].overview}<br><br>`);
        $("#movieResults").append(`<img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}"><br>`);
        $("#movieResults").append(`<button id="${data.results[i].backdrop_path}" class="backdropImg">See background image!</button><hr>`);
    }

}
// This function gets the movie api
// and sends it to the processData
// function to run
const searchMovie = () => {
    let movie = $("#searchBar").val();
    $.ajax({
        url: `https://api.themoviedb.org/3/search/movie?api_key=0129b7a280b04a550855f7ce4602c30a&language=en-US&query=${movie}&page=1&include_adult=false`,
        type: "GET",
        success: processData
    })
}

// function which displays the backdrop
// at the top right of the DOM
function displayBackdrop() {
    imgID = $(this).attr("id");
    $("#topRight").html(`<img src="https://image.tmdb.org/t/p/original${imgID}" width="100%">`)
}

// this function changes the
// page the DOM displays
function changePageNumber() {
    pageNumber = $(this).attr("id");

    pageNumber = parseInt(pageNumber);
    display();
}

// a function which switches
// to the previous page
function prevPage() {
    pageNumber--;
    if (pageNumber === 0) {
        pageNumber = 1;
    }
    display();
}

// a function which switches
// to the next page
function nextPage() {
    pageNumber++;
    let pageLimit = Math.ceil(data.results.length / menuValue)
    if (pageNumber > pageLimit) {
        pageNumber = pageLimit
    }
    display();
}

// function which selects the page
function selectPage() {

    $("#pageSelector").empty();

    // this sets the page limit
    let pageLimit = Math.ceil(data.results.length / menuValue)

    // a for loop which displays
    // the buttons
    for (let i = 1; i <= pageLimit; i++) {
        if (i === 1) {
            $("#pageSelector").append(`<button class="display" id="${i}">First</button>`)
            $("#pageSelector").append(`<button onclick="prevPage()">Prev.</button>`)
        }
        $("#pageSelector").append(`<button class="display" id="${i}">${i}</button>`)
        if (i === pageLimit) {
            $("#pageSelector").append(`<button onclick="nextPage()">Next</button>`)
            $("#pageSelector").append(`<button class="display" id="${pageLimit}">Last</button>`)
        }
    }

    if (pageLimit === 1) {
        $("#pageSelector").empty();
    }
    
}
// This runs when the user enter a value and returns it
// in two different ways into the searchMovie function
const setup = () => {
    menuValue = $("#pageSize option:selected").val();
    $("#pageSize").change(function () {
        $("#pageSelector").empty();
        menuValue = $("#pageSize option:selected").val();
        selectPage();
        display();
    })

    $("body").on("click", ".display", changePageNumber);

    $("body").on("click", ".backdropImg", displayBackdrop);

    // this always us to press "enter" in the textbox
    // which will return the value
    $("#searchBar").on("keypress", function(e) {
        if (e.which === 13) {

            searchMovie();
        }
    });
    // this lets us to click the button to return the value
    $("#searchButton").click(searchMovie);

}

let menuValue = "";
let data = "";
let pageNumber = 1;

// Starts up when page is loaded
$(document).ready(setup);