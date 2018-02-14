const express = require("express");
const router = express.Router();
const { ensureLoggedIn, ensureLoggedOut } = require("connect-ensure-login");
const Venue = require("../models/venue");

router.get("/", (req, res, next) => {
  Venue.find({}, function(err, venues) {
    if (req.user)
      res.render("events/map", { title: "ça marche", venue: venues });
    else res.render("index");
  });
});

module.exports = router;
