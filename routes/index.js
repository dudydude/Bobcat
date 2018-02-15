const express = require("express");
const router = express.Router();
const { ensureLoggedIn, ensureLoggedOut } = require("connect-ensure-login");
const Venue = require("../models/venue");
const Event = require("../models/event");

router.get("/", (req, res, next) => {
  Venue.find({}, function(err, venues) {
    Event.find({ venue: venues._id }, function(err, events) {
      res.render("events/map", {
        title: "ça marche",
        event: events,
        venue: venues
      });
      //else res.render("index");
    });
  });
});

router.get("/logout", ensureLoggedIn(), (req, res, next) => {
  res.render("auth/login");
});

module.exports = router;
