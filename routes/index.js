const express = require("express");
const router = express.Router();
const { ensureLoggedIn, ensureLoggedOut } = require("connect-ensure-login");
const Venue = require("../models/venue");
const Event = require("../models/event");

router.get("/", (req, res, next) => {
  // Venue.find({}, function(err, venues) {
  //   res.render("events/map", {
  //     title: "ça marche",
  //     venue: venues
  //   });
  // });

  Venue.find({}, function(err, venues) {
    console.log(venues);
    if (err) return next(err);
    const test = venues.map(element => {
      return element.name;
    });
    console.log(test);

    Event.find({ venue: test }, function(err, events) {
      if (err) return next(err);
      // console.log("venue loc" + test);
      res.render("events/map", {
        title: "ça marche",
        venue: venues,
        event: events
      });
    });

    //   var eventsList = events;
    //   for (i = 0; i < events.length; i++) {
    //     var eventVenue = eventsList[i].venue;
    //     console.log("LOG EVENTS ==>" + eventVenue);
    //   }
    // } else res.render("index");
  });
});

module.exports = router;
