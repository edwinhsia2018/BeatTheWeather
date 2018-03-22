$("#submitW").on("click", function(event){
    event.preventDefault();
    var apiKey = "d23506797d07737660408148e7533f22"
    var zip = $("#zipCodeForm").val();
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?zip="+zip+",us&appid="+ apiKey;
    
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response){
        console.log(queryURL)
        console.log(response)
        $("#temp").text(response.main.temp);   
    })
})