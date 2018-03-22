$(document).on("click", "#zipcode-submit", function (){
  var zipCode = $("#zipcode").value().trim();
  function IsValidZipCode(zipCode) {
    var isValid = /^[0-9]{5}(?:-[0-9]{4})?$/.test(zipCode);
    if (isValid) {
        var queryURL = ""
        $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function(response) {
            
        })
    }
    else {
        alert('Invalid ZipCode');
    }
  }
});
