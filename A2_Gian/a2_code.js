// The function which displays all of the
// static info into the DOM
const processData = (data) => {

    // We will store all the backdrops here
    let backdropImg = [];

    // This clears the page when you enter
    // another value in the search bar in the DOM
    $("#movieResults").empty();
    $("#topRight").empty();

    // gets all necessary data from api
    // and either displays it or stores
    // it for future use
    for (let movies in data.results) {
        $("#movieResults").append(`${data.results[movies].original_title}<br>`);
        $("#movieResults").append(`${data.results[movies].overview}<br><br>`);
        $("#movieResults").append(`<img src="https://image.tmdb.org/t/p/w500/${data.results[movies].poster_path}"><br>`);
        $("#movieResults").append(`<button id="img${movies}">See background image!</button><br>`);
        backdropImg.push(`<img src="https://image.tmdb.org/t/p/w500/${data.results[movies].backdrop_path}">`);
    }

    // this will go through the buttons
    // and checks if there is one which is
    // pressed and shows the backdrop
    for (let images of backdropImg) {  
        let imgCheck = `#img${backdropImg.indexOf(images)}`;
        $(imgCheck).click(() => {
            $("#topRight").empty().append(backdropImg[backdropImg.indexOf(images)]);
        }); 
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

// This runs when the user enter a value and returns it
// in two different ways into the searchMovie function
const setup = () => {
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

// Starts up when page is loaded
$(document).ready(setup);