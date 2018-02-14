const express = require("express");
const router = express.Router();
const { ensureLoggedIn, ensureLoggedOut } = require("connect-ensure-login");

router.get("/", ensureLoggedIn(), (req, res, next) => {
  res.render("events/map");
});

module.exports = router;
