// function which will output the data
function outputTemp(data) {
    $('#cityTemperature').html(JSON.stringify(data.main.temp));
}

// funciton which gets the weather api of the city
function getWeatherAPI() {
    let cityName = $('#cityName').val();
    $.ajax(
        {
            url: `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=74a9d263768216527749f842e3f36466&units=metric`,
            type: "GET",
            success: outputTemp
        }
    )
}

function setup() {
    $('#temperatureButton').click(getWeatherAPI);
}

$(document).ready(setup);