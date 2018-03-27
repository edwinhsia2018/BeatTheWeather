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
            $("#wIcon").empty();
            $("#wIcon").append('<img id="wImg" src="https://openweathermap.org/img/w/11d.png" />');
            $("#jjjumbotron3").css("background-image", 'url("http://0.s3.envato.com/files/1450028/preview.jpg")');
            $("#jjjumbotron3").css("height: auto");
            //thunder
        }
        else if(weatherImage >= 300 && weatherImage < 600){
            $("#wIcon").empty();
            $("#wIcon").append('<img id="wImg" src="https://openweathermap.org/img/w/09d.png" />');
            $("#jjjumbotron3").css("background-image", 'url("http://0.s3.envato.com/files/1450028/preview.jpg")');
            $("#jjjumbotron3").css("height: auto");
            //rain
        }
        else if(weatherImage >= 600 && weatherImage < 700){
            $("#wIcon").empty();
            $("#wIcon").append('<img id="wImg" src="https://openweathermap.org/img/w/13d.png" />');
            $("#jjjumbotron3").css("background-image", 'url("https://wallpapercave.com/wp/83LmHEO.jpg")');
            $("#jjjumbotron3").css("height: auto");
            //snow
        }
        else if(weatherImage >= 700 && weatherImage < 800){
            $("#wIcon").empty();
            $("#wIcon").append('<img id="wImg" src="https://openweathermap.org/img/w/50d.png" />');
            $("#jjjumbotron3").css("background-image", 'url("https://www.walldevil.com/wallpapers/a34/backgrounds-wallpapers-image-imagepages-images-desktop.jpg")');
            $("#jjjumbotron3").css("height: auto");
            //mist
        }
        else if(weatherImage == 800){
            $("#wIcon").empty();
            $("#wIcon").append('<img id="wImg" src="https://openweathermap.org/img/w/01d.png" />');
            $("#jjjumbotron3").css("background-image", 'url("https://wallpapercave.com/wp/OeQ26PK.jpg")');
            $("#jjjumbotron3").css("height: auto");
            //sunny/clear
        }
        else if(weatherImage >= 800 && weatherImage < 805){
            $("#wIcon").empty();
            $("#wIcon").append('<img id="wImg" src="https://openweathermap.org/img/w/03d.png" />');
            $("#jjjumbotron3").css("background-image", 'url("https://hdwallsource.com/img/2014/7/cloudy-sky-background-33821-34582-hd-wallpapers.jpg")');
            $("#jjjumbotron3").css("height: auto");
            //cloudy
        }
    })
}
