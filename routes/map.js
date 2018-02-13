const express = require("express");
const router = express.Router();
const ensureLogin = require("connect-ensure-login");

router.get("/", function(req, res, next) {
  res.render("events/map");
});

module.exports = router;
