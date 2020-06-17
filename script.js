$("#searchBtn").on("click", function (event) {
    event.preventDefault();
    var zipCode = $("#zipCode").val();

    var queryURL = "https://api.weather.com/v3/wx/disease/tracker/county/60day?postalKey=" + zipCode + ":US&format=json&apiKey=" + apiKey;


    $.ajax({
        url: queryURL,
        method: 'GET',
    }).then(function(response) {
        var confirmedToday = response.covid19.confirmed[0];
        var county = response.covid19.recordLocation;
        var deaths = response.covid19.deaths[0];
        var percentagePositive = ((response.covid19.confirmed[0] / response.covid19.testsPerformed[0]) * 100).toFixed(2) + "%";
        var populationConfirmed = ((response.covid19.confirmed[0] / response.covid19.totalPopulation) * 100).toFixed(2) + "%";
        console.log(response);
        console.log(confirmedToday);
        console.log(deaths);
        console.log(percentagePositive);
        console.log(populationConfirmed);
    })
});




