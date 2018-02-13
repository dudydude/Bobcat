const express = require("express");
const router = express.Router();
const { ensureLoggedIn, ensureLoggedOut } = require("connect-ensure-login");

router.get("/", (req, res, next) => {
  if (req.user) res.render("events/map");
  else res.render("index");
});

module.exports = router;
