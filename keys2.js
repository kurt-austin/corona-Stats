
console.log("Hey!!")
$("#searchBtn").on("click", function (event) {
    // event.preventDefault();
    console.log("Hey!!")
    var zipCode = $("#zipCode").val();
    console.log(zipCode);
    var queryURL = "https://api.weather.com/v3/wx/disease/tracker/county/60day?postalKey=" + zipCode + ":US&format=json&apiKey=9d2908c81003444ea908c81003b44ed4";
});
​
//     $.ajax({
//         url: queryURL,
//         method: 'GET',
//     }).then(function(response) {
//         var confirmedToday = response.covid19.confirmed[0];
//         var county = response.covid19.recordLocation;
//         var deaths = response.covid19.deaths[0];
//         var percentagePositive = ((response.covid19.confirmed[0] / response.covid19.testsPerformed[0]) * 100).toFixed(2) + "%";
//         var populationConfirmed = ((response.covid19.confirmed[0] / response.covid19.totalPopulation) * 100).toFixed(2) + "%";
//         console.log(response);
//         console.log(confirmedToday);
//         console.log(deaths);
//         console.log(percentagePositive);
//         console.log(populationConfirmed);
// ​});
​
//         var ctx = document.getElementById('casesChart').getContext('2d');
//         var confirmedCases = (response.covid19.confirmed).reverse();
//         var casesLabels = (response.covid19.dateReport).reverse();
//         var chart = new Chart(ctx, {
//         // The type of chart we want to create
//         type: 'line',
// ​
//         // The data for our dataset
//         data: {
//             labels: casesLabels,
//             datasets: [{
//                 label: 'Confirmed Cases in ' + county,
//                 // backgroundColor: 'rgb(18, 18, 92)',
//                 borderColor: 'rgb(18, 18, 92)',
//                 data: confirmedCases
//             }]
//         },
// ​
//         // Configuration options go here
//         options: {}
//         });
// ​
//         var deathsVisual = document.getElementById('deathsChart').getContext('2d');
//         var confirmedDeaths = (response.covid19.deaths).reverse();
//         var secondChart = new Chart(deathsVisual, {
//             type: 'line',
//             data: {
//                 labels: casesLabels,
//                 datasets: [{
//                     label: 'Confirmed Deaths in ' + county,
//                     borderColor: 'rgb(18, 18, 92)',
//                     backgroundColor: 'rgb(18, 18, 92)',
//                     data: confirmedDeaths,
//                     order: 1
//                 }, {
//                     label: 'Confirmed Cases in ' + county,
//                     borderColor: 'rgb(18, 18, 92)',
//                     data: confirmedCases,
//                     order: 2
//                 }]
//             }
//         })
// ​
//         var casesvsconfirmed = document.getElementById('testsChart').getContext('2d');
//         var testsPerformed = (response.covid19.testsPerformed).reverse();
//         var thirdChart = new Chart(casesvsconfirmed, {
//             type: 'line',
//             data: {
//                 labels: casesLabels,
//                 datasets: [{
//                     label: 'Tests Performed in ' + county,
//                     borderColor: 'rgb(18, 18, 92)',
//                     data: testsPerformed,
//                     order: 1
//                 }, {
//                     label: 'Cases Positive in' + county,
//                     borderColor: 'rgb(18, 18, 92)',
//                     data: confirmedCases,
//                     order: 2
//                 }]
// ​
//             } 
//         })
// ​
//     })
// });
