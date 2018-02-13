var autocomplete, map, marker;

console.log("it works");
function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 48.860342, lng: 2.341932 },
    zoom: 14
  });

  var infoWindow = new google.maps.InfoWindow({ map: map });

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent("Location found.");
        map.setCenter(pos);
      },
      function() {
        handleLocationError(true, infoWindow, map.getCenter());
      }
    );
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
}

// Use to display the autocomplete form + grab data from it (LAT + LONG)

function initialize() {
  var input = document.getElementById("searchTextField");
  var autocomplete = new google.maps.places.Autocomplete(input);
  google.maps.event.addListener(autocomplete, "place_changed", function() {
    var venue = autocomplete.getPlace();
    document.getElementById("searchTextField").value = venue.name;
    document.getElementById("adress").value = venue.formatted_address;
    document.getElementById("venue_lat").value = venue.geometry.location.lat();
    document.getElementById("venue_long").value = venue.geometry.location.lng();
    //alert("This function is working!");
    alert(venue.formatted_address);
    alert(venue.name);
    // alert(place.address_components[0].long_name);
  });
}
google.maps.event.addDomListener(window, "load", initialize);
