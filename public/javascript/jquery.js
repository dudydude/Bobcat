//const apiMethods = require("api-methods");
$(document).ready(function() {
  const userId = $("#user-header").attr("user-id");
  $(".collapsible").collapsible();

  //click pawprint
  const meow = new Audio("/sounds/bobcat.mp3");

  $(".pawprint").click(function() {
    meow.play();
    $(this).toggleClass("blueColour");
    let eventId = $(this).attr("id");
    apiMethods.bookmark(eventId, userId).then(bookmarkedEvent => {
      console.log(bookmarkedEvent);
    });
  });

  $(".deleteprint").click(function() {
    let userId = $("#user-header").attr("user-id");
    let eventId = $(this).attr("id");
    apiMethods.delete(eventId, userId).then(deletedEvent => {
      console.log(deletedEvent);
    });
  });

  $("#delete-all").click(function() {
    meow.play();
    let userId = $("#user-header").attr("user-id");
    console.log(userId);
    apiMethods
      .deleteAll(userId)
      .then(result => {
        return;
      })
      .catch(err => {
        console.log(err);
      });
  });

  $(".datepicker").pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: "Today",
    clear: "Clear",
    close: "Ok",
    closeOnSelect: false
  });

  $(".timepicker").pickatime({
    default: "now", // Set default time: 'now', '1:30AM', '16:30'
    fromnow: 0, // set default time to * milliseconds from now (using with default = 'now')
    twelvehour: false, // Use AM/PM or 24-hour format
    donetext: "OK", // text for done-button
    cleartext: "Clear", // text for clear-button
    canceltext: "Cancel", // Text for cancel-button
    autoclose: false, // automatic close timepicker
    ampmclickable: true, // make AM PM clickable
    aftershow: function() {} //Function for after opening timepicker
  });

  $("#filter-btn").click(function() {
    let filterDate = $(".datepicker").val();
    let filterTime = $(".timepicker").val();
    let date = new Date(filterDate);
    for (i = 0; i <= myVenue.lenght; i++) {
      if (date === myVenue[i].date) {
        alert(myVenue[i].date);
      }
    }
    $(".test").append(`${date}`);
  });
});
