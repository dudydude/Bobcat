var autocomplete, map, marker;

console.log("it works");
function initMap() {
  var uluru = { lat: -25.363, lng: 131.044 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(
// //       function(position) {
//         var center = {
//           lat: position.coords.latitude,
//           lng: position.coords.longitude
//         };

//         map = new google.maps.Map(document.getElementById("map"), {
//           center: center,
//           scrollwheel: false,
//           zoom: 12
//         });

//         var input = document.getElementById("search");
//         autocomplete = new google.maps.places.Autocomplete(input);
//       },
//       function() {
//         document.getElementById("map").innerHTML =
//           "Error in the geolocation service.";
//       }
//     );
//   } else {
//     document.getElementById("map").innerHTML =
//       "Browser does not support geolocation.";
//   }
// }

// var loadGoogleInfo = function() {
//   // Clear markers if they are setted
//   if (marker) {
//     marker.setMap(null);
//   }

//   // Center the map
//   var place = autocomplete.getPlace();
//   map.setCenter({
//     lat: place.geometry.location.lat(),
//     lng: place.geometry.location.lng()
//   });

//   // Create the new marker
//   marker = new google.maps.Marker({
//     position: {
//       lat: place.geometry.location.lat(),
//       lng: place.geometry.location.lng()
//     },
//     map: map,
//     title: place.name
//   });
