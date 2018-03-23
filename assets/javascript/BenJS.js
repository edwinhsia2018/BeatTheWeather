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

    var queryUrl = "https://api.seatgeek.com/2/events?postal_code=" + userZipCode + "&client_id=MTA5NjY3OTR8MTUyMTgxNzkwOS40"

$.ajax({
    url: queryUrl,
    method: "GET"
}).then(function (response) {

    var results = response.events;
    console.log(response)

    for (var i = 0; i < results.length; i++) {

       var eventDiv = $("<div>");

       eventDiv.addClass("eventDiv card");

       var eventDivInfo = $("<div class='card-body'>")
       
       var images = response.events.images[i];

       //IMG
       eventDivInfo.attr("src", images);
       console.log(images);

       //TIME
       eventDivInfo.attr("text", response.events.datetime_utc);
 
       
       //EVENT NAME
       eventDivInfo.attr("text", response.events.venue.name);
       
       //LOCATION
       eventDivInfo.attr("text", response.events.venue.address);


       // EVENT INFO IS APPENDED TO OUR INSERTED DIV
    eventDiv.append(eventDivInfo);
        console.log(eventDivInfo);


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

