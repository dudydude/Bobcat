const express = require("express");
const router = express.Router();
const { ensureLoggedIn, ensureLoggedOut } = require("connect-ensure-login");

router.get("/", ensureLoggedIn(), (req, res, next) => {
  Venue.find({}, function(err, data) {
    // note that data is an array of objects, not a single object!
    res.render("events/map", { venues: data });
    console.log(data);
  });
});

module.exports = router;
