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
});
