$("#ZIPbutton").on("click", function(event){
    event.preventDefault();

    getWeather();

})

function getWeather(){

    var apiKey = "d23506797d07737660408148e7533f22"
    var zip = $("#zipCodeForm").val();
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?zip="+zip+",us&appid="+ apiKey;
    
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response){
        $("#city").text(response.name); 
        $("#temp").text(Math.round(response.main.temp * (9/5) - 459.67)+ "°F");
        $("#sky").text(response.weather[0].main);
        console.log(response);
        var weatherImage = response.weather[0].id;

        if(weatherImage >= 200 && weatherImage < 300){
            $("#wIcon").append('<img id="wImg" src="https://openweathermap.org/img/w/11d.png" />');
            $("#weather-background").css("background-image", 'url("http://kb4images.com/images/rain-images/38093866-rain-images.jpg")');
            //thunder
        }
        else if(weatherImage >= 300 && weatherImage < 600){
            $("#wIcon").append('<img id="wImg" src="https://openweathermap.org/img/w/09d.png" />');
            $("#weather-background").css("background-image", 'url("http://kb4images.com/images/rain-images/38093866-rain-images.jpg")');
            //rain
        }
        else if(weatherImage >= 600 && weatherImage < 700){
            $("#wIcon").append('<img id="wImg" src="https://openweathermap.org/img/w/13d.png" />');
            $("#weather-background").css("background-image", 'url("https://wallpaperscraft.com/image/trees_winter_blizzard_wind_snow_14899_3840x2160.jpg")');
            //snow
        }
        else if(weatherImage >= 700 && weatherImage < 800){
            $("#wIcon").append('<img id="wImg" src="https://openweathermap.org/img/w/50d.png" />');
            $("#weather-background").css("background-image", 'url("https://www.thesun.co.uk/wp-content/uploads/2016/12/nintchdbpict000287123874.jpg?strip=all&quality=100&w=1200&h=800&crop=1")');
            //mist
        }
        else if(weatherImage == 800){
            $("#wIcon").append('<img id="wImg" src="https://openweathermap.org/img/w/01d.png" />');
            $("#weather-background").css("background-image", 'url("https://i.pinimg.com/originals/92/39/54/92395443ed69dbdd163988ae680874df.jpg")');
            //sunny/clear
        }
        else if(weatherImage >= 800 && weatherImage < 805){
            $("#wIcon").append('<img id="wImg" src="https://openweathermap.org/img/w/03d.png" />');
            $("#weather-background").css("background-image", 'url("https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/PH7HLeq/extreme-weather-and-strong-winds-palm-tree-moves-in-the-wind_4xntjgsfe__F0000.png")');
            //cloudy
        }
    })
}


