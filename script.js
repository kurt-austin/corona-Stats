
var olArticles;
var liArticleList;
var numberOfArticles = 2
var currentDate = moment().format('YYYY-MM-DD');
var briAPIKey = "e3ad76ed6b1a4d8d810fdf1baad01f79";
var kieranAPIKey = "decae5c6-eb72-4249-9f39-1d56866c78ef";
var hideLower = $("#second-row");
var confirmedTodayEl = $(".confirmed");
var percentagePositiveEl = $(".positive");
var deathsEl = $(".deaths");


var queryArticles = "https://content.guardianapis.com/search?to-date=" + currentDate + "&order-by=newest&section=us-news&q=coronavirus&api-key=" + kieranAPIKey;


hideLower.hide();



$("#searchBtn").on("click", function (event) {
    event.preventDefault();
    hideLower.show();
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
        confirmedTodayEl.text("Confirmed Today:  " +confirmedToday);
        percentagePositiveEl.text("% of Tests Positive:  " + percentagePositive);
        deathsEl.text("# Deaths Today:  " + deaths);
        // console.log(response);
        // console.log(confirmedToday);
        // console.log(deaths);
        // console.log(percentagePositive);
        // console.log(populationConfirmed);
        

        var ctx = document.getElementById("casesChart").getContext("2d");
        var confirmedCases = (response.covid19.confirmed).reverse();
        var casesLabels = (response.covid19.dateReport).reverse();
        var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: casesLabels,
            datasets: [{
                label: 'Confirmed Cases in ' + county,
                // backgroundColor: 'rgb(18, 18, 92)',
                borderColor: 'rgb(18, 18, 92)',
                data: confirmedCases
            }]
        },

        // Configuration options go here
        options: {}
        });

        var deathsVisual = document.getElementById('deathsChart').getContext('2d');
        var confirmedDeaths = (response.covid19.deaths).reverse();
        var secondChart = new Chart(deathsVisual, {
            type: 'line',
            data: {
                labels: casesLabels,
                datasets: [{
                    label: 'Confirmed Deaths in ' + county,
                    borderColor: 'rgb(18, 18, 92)',
                    backgroundColor: 'rgb(18, 18, 92)',
                    data: confirmedDeaths,
                    order: 1
                }, {
                    label: 'Confirmed Cases in ' + county,
                    borderColor: 'rgb(18, 18, 92)',
                    data: confirmedCases,
                    order: 2
                }]
            }
        })

        var casesvsconfirmed = document.getElementById('testsChart').getContext('2d');
        var testsPerformed = (response.covid19.testsPerformed).reverse();
        var thirdChart = new Chart(casesvsconfirmed, {
            type: 'line',
            data: {
                labels: casesLabels,
                datasets: [{
                    label: 'Tests Performed in ' + county,
                    borderColor: 'rgb(18, 18, 92)',
                    data: testsPerformed,
                    order: 1
                }, {
                    label: 'Cases Positive in' + county,
                    borderColor: 'rgb(18, 18, 92)',
                    data: confirmedCases,
                    order: 2
                }]

            } 
        })

    });

    newsCall();

    

});

function newsCall() {
    $.ajax({
        url: queryArticles,
        method: "GET",
  
    }).then (function(result) {
        console.log("news result: " + result);
        console.log(result.response.results[0].webTitle);
        $(".articlesList").empty();
        for (var i = 0; i < 3; i++) {
            
            var headline = result.response.results[i].webTitle;
            var pubDate = result.response.results[i].webPublicationDate;
            var newPubDate = pubDate.substring(0,10);
            // var list = $("<ol>")
            var webUrl = result.response.results[i].webUrl;
            var a = $("<a>").addClass("icon").attr("href", "https://www.facebook.com/sharer/sharer.php?u=" + webUrl)
            var newI = $("<i>");
            newI.addClass("fa fa-facebook-official");
            a.append(newI);
       
            // .attr("aria-hidden", "true");
            // var newIcon = a.append(<i class="fa fa-facebook-official" aria-hidden="true"></i>
            // );


            var newItem = $("<li>").text(headline);
            var authorP = $("<p>").text(newPubDate);
            var urlA = $("<a>").attr("href", webUrl).text(webUrl);
            newItem.append(authorP);
            newItem.append(urlA, a);
            var list = $(".articlesList").append(newItem);
            $(".articles").append(list);
        }
        
    });
}


let tabsWithContent = (function () {
    let tabs = document.querySelectorAll('.tabs li');
    let tabsContent = document.querySelectorAll('.tab-content');
  
    let deactvateAllTabs = function () {
      tabs.forEach(function (tab) {
        tab.classList.remove('is-active');
      });
    };
  
    let hideTabsContent = function () {
      tabsContent.forEach(function (tabContent) {
        tabContent.classList.remove('is-active');
      });
    };
  
    let activateTabsContent = function (tab) {
      tabsContent[getIndex(tab)].classList.add('is-active');
    };
  
    let getIndex = function (el) {
      return [...el.parentElement.children].indexOf(el);
    };
  
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        deactvateAllTabs();
        hideTabsContent();
        tab.classList.add('is-active');
        activateTabsContent(tab);
      });
    })
  
    tabs[0].click();
  })();


// https://www.facebook.com/sharer/sharer.php?u=https://www.theguardian.com/us-news/2020/jun/20/tulsa-oklahoma-trump-wild-evening-unrest-coronavirus-fears



// var newI = $("<i>");
// newI.addClass(fa fa-facebook-official);
// newI.attr("aria-hidden", "true");

//     // for (var i =0; i < olArticles.length; i ++){
    //     //   liArticleList = $("<li>").text(headline);
    //     // };
    
    
    
        // for (var i = 0; i < numRecords; i++) {
        //     var headline = result.response.results[i].webTitle;
        //     var pubDate = result.response.results[i].webPublicationDate;
            
        //     var webUrl = result.response.results[i].webUrl;
        //     var newItem = $("<li>").text(headline);
        //     var authorP = $("<p>").text(pubDate);
        //     var urlA = $("<a>").attr("href", webUrl).text(webUrl);
        //     newItem.append(authorP);
        //     newItem.append(urlA);
        //     list.append(newItem);
        //     $(".results").append(list)
    







