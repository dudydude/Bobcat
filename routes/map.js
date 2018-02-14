const express = require("express");
const router = express.Router();
const { ensureLoggedIn, ensureLoggedOut } = require("connect-ensure-login");
const Venue = require("../models/venue");

var mongoose = require("mongoose");

// var data = new Array();
// mongoose.model("Venue").find({}, function(err, venue) {
//   for (var i = 0; i < Venue.length; i++) {
//     data[i] = JSON.stringify(Venue[i]);
//   }
// });

// router.get("/", ensureLoggedIn(), (req, res, next) => {
//   Venue.collection({}, function(err, venues) {
//     res.render("events/map", { title: "venue", venues: venues });
//   });
// });

//router.post("/", ensureLoggedIn(), (req, res, next) => {});
module.exports = router;
//module.exports = data;
