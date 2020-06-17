$("#searchBtn").on("click", function (event) {
    event.preventDefault();
    var zipCode = $("#zipCode").val();

    var queryURL = "https://api.weather.com/v3/wx/disease/tracker/county/60day?postalKey=" + zipCode + ":US&format=json&apiKey=" + apiKey;


    $.ajax({
        url: queryURL,
        method: 'GET',
    }).then(function(response) {
        var confirmedToday = response.covid19.confirmed[0];
        console.log(response);
        console.log(confirmedToday);
    })
});




