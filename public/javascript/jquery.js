//const apiMethods = require("api-methods");
$(document).ready(function() {
  const userId = $("#user-header").attr("user-id");
  console.log(userId);
  $(".collapsible").collapsible();

  //click pawprint

  $(".pawprint").click(function() {
    $(this).toggleClass("blueColour");
    let eventId = $(this).attr("id");
    console.log(apiMethods.bookmark(eventId, userId));
    apiMethods.bookmark(eventId, userId).then(res => {
      console.log(res);
    });
    //PUSH TO USER ARRAY
  });
});
