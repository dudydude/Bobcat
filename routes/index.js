const express = require("express");
const router = express.Router();
const { ensureLoggedIn, ensureLoggedOut } = require("connect-ensure-login");
const Venue = require("../models/venue");
const Event = require("../models/event");

router.get("/", (req, res, next) => {
  Event.find({})
    .populate("venue")
    .exec(function(err, events) {
      //console.log(events.localisation);
      if (req.user) {
        res.render("events/map", {
          title: "ça marche",
          event: events
          //venue: venues
        });
      } else res.render("index");
    });
});

// router.get("/logout", ensureLoggedIn(), (req, res, next) => {
//   res.render("auth/login");
// });

module.exports = router;
