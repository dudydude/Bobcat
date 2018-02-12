var express = require("express");
var router = express.Router();

// GET create event

router.get("/new", function(req, res, next) {
  res.render("events/create");
});

// POST a new event

router.post("/", ensureLogin.ensureLoggedIn(), (req, res, next) => {
  const eventInfo = {
    eventTime: req.body.eventTime,
    venue: req.body.venue,
    description: req.body.description,
    genre: req.body.genre,
    _creator: req.user._id
  };

  const newEvent = new Event(eventInfo);

  newEvent.save(err => {
    if (err) {
      return next(err);
    }
    // redirect to the list of products if it saves
    return res.redirect(`/events/${event.id}`);
  });
});
module.exports = router;
