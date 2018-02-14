const express = require("express");
const router = express.Router();
const { ensureLoggedIn, ensureLoggedOut } = require("connect-ensure-login");
const ensureLogin = require("connect-ensure-login");
const Venue = require("../models/venue");
const mongoose = require("mongoose");

// var db;

// mongoose.connect("mongodb://localhost/bobcat", (err, client) => {
//   if (err) return console.log(err);
//   db = client.db("bobcat"); // whatever your database name is
//   app.listen(3000, () => {
//     console.log("listening on 3000");
//   });
// });

// db
//   .collection("venues")
//   .find()
//   .toArray(function(err, results) {
//     console.log(results);
//     // send HTML file populated with quotes here
//   });

router.get("/", ensureLoggedIn(), (req, res, next) => {
  Venue.find({}, function(err, data) {
    // note that data is an array of objects, not a single object!
    res.render("events/map", { venues: data });
    console.log(data);
  });
});

module.exports = router;
