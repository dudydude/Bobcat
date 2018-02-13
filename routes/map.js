const express = require("express");
const router = express.Router();
const { ensureLoggedIn, ensureLoggedOut } = require("connect-ensure-login");
const ensureLogin = require("connect-ensure-login");

const Venue = require("../models/venue");

router.get("/", ensureLoggedIn(), (req, res, next) => {
  res.render("events/map");
});

module.exports = router;
