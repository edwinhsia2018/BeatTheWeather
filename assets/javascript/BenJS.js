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

       var f = $("<p>").text(results[i].venue.location.address);

       var d = $("<p>").text("Rating: " + results[i].venue.rating);

       var u = $("<p>").text("Website: " + results[i].venue.url);

       var i = $("<img>");
       i.attr("src", results[i].venue.id);


       eventDiv.append(p);
       eventDiv.append(f);
       eventDiv.append(d);
       eventDiv.append(u);


       $("#restaurantResults").prepend(eventDiv);

    }

})
$("#restaurantResults").empty();

}

