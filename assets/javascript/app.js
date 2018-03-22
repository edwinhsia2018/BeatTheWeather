function getWeather(){
    var queryURL = "weather url" + currentWeather + "";
    $.ajax({
        url: queryURL,
        method: "GET"
      })
    .then(function(response){
        var currentWeather = response.data.currentWeather;
        $("#weather").append(response.currentWeather);
    })
}

if (currentWeather = sunny && temperature > 60) {
    var suggestedFood = "icecream"
}
else if (currentWeather = rainy) {

}
else if (currentWeather = snowing) {

}
else if (currentWeather = windy) {

}


function displayFood() {
    var queryURL = "https://api.yelp.com/v3/businesses/search?q=" + suggestedFood""
    $.ajax({
        url: queryURL,
        method: "GET"
      })
      .then(function(response){
        var results = response.data;
        for (var i=0; i<results.length; i++) {
            var foodImage = $("<img>");
            foodImage.attr("src", results[i].image_url);
            foodImage.attr("class", "food-image");
        }
    })
}