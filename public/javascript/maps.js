var autocomplete, map, marker;

// var markerCenter = { lat: myLatLng[0].loc.lat, lng: myLatLng[0].loc.lng };
// console.log(markerCenter);

console.log(myLatLng);
function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 48.860342, lng: 2.341932 },
    zoom: 14
  });

  for (i = 0; i <= myLatLng.length; i++) {
    var marker = new google.maps.Marker({
      position: { lat: myLatLng[i].loc.lat, lng: myLatLng[i].loc.lng },
      map: map
    });
  }

  // var contentString =
  //   '<div id="content">' +
  //   '<div id="siteNotice">' +
  //   "</div>" +
  //   '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
  //   '<div id="bodyContent">' +
  //   "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
  //   "sandstone rock formation in the southern part of the " +
  //   "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
  //   "south west of the nearest large town, Alice Springs; 450&#160;km " +
  //   "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
  //   "features of the Uluru - Kata Tjuta National Park. Uluru is " +
  //   "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
  //   "Aboriginal people of the area. It has many springs, waterholes, " +
  //   "rock caves and ancient paintings. Uluru is listed as a World " +
  //   "Heritage Site.</p>" +
  //   '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
  //   "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
  //   "(last visited June 22, 2009).</p>" +
  //   "</div>" +
  //   "</div>";

  // Generate a marker for each iteration

  // var infowindow = new google.maps.InfoWindow({});

  // marker.addListener("click", function() {
  //   infowindow.setContent(this.contentString);
  //   infowindow.open(map, this);
  //   map.setCenter(this.getPosition());
  // });

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent("Location found");
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
  });
}
//google.maps.event.addDomListener(window, "load", initialize);
