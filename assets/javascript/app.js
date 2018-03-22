function getWeather(){
    zipcode = $("#zip")
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

if (currentWeather = sunny) {
    var suggestedFood = "icecream";
    $("#weather-background").attr("src", "https://i.pinimg.com/originals/92/39/54/92395443ed69dbdd163988ae680874df.jpg");
}
else if (currentWeather = rainy) {

    $("#weather-background").attr("src", "http://kb4images.com/images/rain-images/38093866-rain-images.jpg");
}
else if (currentWeather = snowing) {

    $("#weather-background").attr("src", "https://wallpaperscraft.com/image/trees_winter_blizzard_wind_snow_14899_3840x2160.jpg");
}
else if (currentWeather = windy) {

    $("#weather-background").attr("src", "http://bsnscb.com/data/out/23/38783249-blow-wallpapers.jpg");
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