//NON-EDITED URL
//var queryUrl = "https://api.seatgeek.com/2/events?type=concert&venue.postal_code=55414&client_id=MTA5NjY3OTR8MTUyMTgxNzkwOS40"

// OUR ZIP CODE ARRAY --- HOLDS OUR INFO
var zipCode = [];



// WHEN WE CLICK OUR SUBMIT BUTTON WE STORE OUR ZIP CODE INFO

$(document).on("click", "#ZIPbutton", function(event) {
    event.preventDefault();

    // This takes our ZIP CODE INPUT
    var userZipCode = $("#zipCodeForm").val();

    // THE ZIP CODE THE USER ENTERED IS ADDED TO THE userZipCode ARRAY
    zipCode.push(userZipCode);
    displayEvents()

});


// FUNCTION THAT DISPLAYS OUR EVENTS WE GRAB

function displayEvents() {

    var userZipCode = $("#zipCodeForm").val();

    var settings = {
        "async": true,
        //"crossDomain": true,
        "url": "https://api.foursquare.com/v2/venues/explore?near=" + userZipCode + "&oauth_token=OL4R3QGEZHZP0NH4ZA2RZCS034DK2JZIFICQ2WGGLBFTSQXZ&v=20180323&radius=20000&section=food&limit=5&categories=",
        "method": "GET",
        'dataType':"jsonp",
        "headers": {
          "client_id": "EUGHXW14BPUZUQRJR3IOTP4GJY2DS0HMZNWHQRFTCKA0WGPW",
          "client_secret": "LCWCNJILWY0WXHSS3K2GI4T5VVPJ5MZ0XRMEDD0SXOKTZFK0",
          "Cache-Control": "no-cache",
         // "Postman-Token": "b2ca49c0-2e66-4580-9624-2939cb9526c7"
        }
      }

      $.ajax(settings).done(function (response) { 
       // $("#class").html("<h1>" + response.response.groups[0].items[0].venue.name + " Weather Details</h1>");
            
       console.log(response);
       
}).then(function (response) {
    var results = response.response.groups[0].items;


    // are we actually grabbing anything from our array???
    for (var i = 0; i < results.length; i++) {

       var eventDiv = $("<div>");

       var p = $("<p>").text(results[i].venue.name);

       eventDiv.append(p);
       



       $("#restaurantResults").prepend(eventDiv);
    }

})

    // DELETES PREVIOUS RESULTS SO WE DON'T CONTINUE TO REPEAT SUGGESTIONS
    // $("#restaurantResults").empty();

    // LOOP THROUGH OUR ZIP CODE ARRAY ---
    // THIS MAY NOT BE THE MOST EFFICENT WAY OF DOING THIS...
    for (var i = 0; i < zipCode.length; i++) {

        // GENERATE RESTAURANT RESULTS
        var a = $("<div>");

        // ADDS CLASS OF RESTAURANT
        a.addClass("restaurant");
        // ADDS A DATA ATTRIBUTE
        a.attr("data-name", zipCode[i]);
        // ADDS RESTAURANT NAME
        

    }

}

