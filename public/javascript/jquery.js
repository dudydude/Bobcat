//const apiMethods = require("api-methods");
$(document).ready(function() {
  const userId = $("#user-header").attr("user-id");
  $(".collapsible").collapsible();

  //click pawprint
  const meow = new Audio("/sounds/Kitty-meow.mp3");

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
    closeOnSelect: false // Close upon selecting a date,
  });
});
