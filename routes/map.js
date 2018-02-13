const express = require("express");
const router = express.Router();
<<<<<<< HEAD
const { ensureLoggedIn, ensureLoggedOut } = require("connect-ensure-login");
=======
const ensureLogin = require("connect-ensure-login");
const Venue = require("../models/venue");
>>>>>>> 3ddffc3462b6c2be75b533676ba04dc5ffe86d0e

router.get("/", ensureLoggedIn(), (req, res, next) => {
  res.render("events/map");
});

module.exports = router;
