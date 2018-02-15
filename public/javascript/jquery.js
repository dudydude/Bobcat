//const apiMethods = require("api-methods");
$(document).ready(function() {
  const userId = $("#user-header").attr("user-id");
  $(".collapsible").collapsible();

  //click pawprint

  $(".pawprint").click(function() {
    $(this).toggleClass("blueColour");
    let eventId = $(this).attr("id");
    apiMethods.bookmark(eventId, userId).then(bookmarkedEvent => {
      console.log(bookmarkedEvent);
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
